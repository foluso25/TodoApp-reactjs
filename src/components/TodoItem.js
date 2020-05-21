import React from 'react'

function TodoItem(props){
const completedStyle = {
       fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
}

    return(
        <div className="todo-item"> 
             <input type="checkbox" checked={props.Pointer.completed} 
             onChange = {()=>{props.handleChange(props.Pointer.id)}}/>
            <p style={props.Pointer.completed? completedStyle : null}>{props.Pointer.text}</p>
        </div>
       
    )
}

export default TodoItem;