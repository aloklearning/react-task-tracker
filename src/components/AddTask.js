import { useState } from "react";

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    // We wanted to do some validation, hence we used onSubmit
    // and not direct onAdd into the form onSubmit
    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please add a task')
            return
        }

        onAdd({ text, day, reminder })

        // Resetting the form
        setText('')
        setDay('')
        setReminder(false)
    }    

    return(
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input 
                    value={text}
                    type='text' 
                    placeholder='Add Task' 
                    onChange={(e) => setText(e.target.value)}
                />
            </div>

            <div className="form-control">
                <label>Day & Time</label>
                <input 
                    value={day}
                    type='text' 
                    placeholder='Add Day & Time' 
                    onChange={(e) => setDay(e.target.value)}
                />
            </div>

            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input
                    type='checkbox' 
                    value={reminder} 
                    checked={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                />
            </div>

            <input className="btn btn-block" type='Submit' placeholder='Save Task' />
        </form>
    )
}

export default AddTask;