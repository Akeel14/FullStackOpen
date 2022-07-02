import React from 'react'

const Notification = ({ message }) => {
    const alertStyle = {
        color: 'green',
        background: "lightgrey",
        fontSize: 20,
        borderStyle: "solid",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    if (message === null) {
        return null
    }

    return (
        <div style={alertStyle}className={ message.type === "error" ? "error" : "notification" }>
            { message.text }
        </div>
    )
}

export default Notification