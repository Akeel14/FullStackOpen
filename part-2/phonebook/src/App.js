import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import phoneBookService from "./services/phonebook";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [notificationMessage, setNotificationMessage] = useState(null);

  useEffect(() => {
    phoneBookService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const personExists = persons.find(
    (person) => person.name.toLowerCase() === newName.toLowerCase()
  );

  const hook = () => {
    axios.get("http://localhost:3002/persons").then((response) => {
      setPersons(response.data);
    });
  };
  useEffect(hook, []);

  const addNameNumber = (event) => {
    event.preventDefault();

    if (personExists) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with new one?`
        )
      ) {
        phoneBookService
          .update(personExists.id, { name: newName, number: newNumber })
          .then((updatedPerson) => {
            setNotificationMessage({
              text: `Updated ${updatedPerson.name}`,
              type: "notification",
            });
            setPersons(
              persons.map((person) =>
                person.id !== updatedPerson.id ? person : updatedPerson
              )
            );
          });
      }
    } else {
      phoneBookService
        .create({ name: newName, number: newNumber })
        .then((returnedPhoneBook) => {
          setNotificationMessage({
            text: `Added ${returnedPhoneBook.name}`,
            type: "notification",
          });
          setPersons(persons.concat(returnedPhoneBook));
          setNewName("");
          setNewNumber("");
        })
        .catch((error) => {
          setNotificationMessage({
            text: `${error.response.data.error}`,
            type: "error",
          });
          setPersons(persons.filter((person) => person.name !== newName));
          setNewName("");
          setNewNumber("");
        });
    }
  };
  //delete person
  const deletePerson = (id) => {
    const person = persons.find((person) => person.id === id);
    if (window.confirm(`Delete ${person.name}?`)) {
      phoneBookService
        .remove(id)
        .then(() => {
          setNotificationMessage({
            text: `Deleted ${person.name}`,
            type: "notification",
          });
          setPersons(persons.filter((person) => person.id !== id));
        })
        .catch((error) => {
          setNotificationMessage({
            text: `${person.name} has already been removed from server`,
            type: "error",
          });

          setPersons(persons.filter((person) => person.id !== id));
        });
    }
  };

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      {notificationMessage !== null ? (
        <Notification message={notificationMessage} />
      ) : null}

      <Filter setFilter={setFilter} />

      <h2>add a new</h2>
      <PersonForm
        addNameNumber={addNameNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
