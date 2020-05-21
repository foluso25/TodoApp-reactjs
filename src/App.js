import React from 'react';
import logo from './logo.svg';
import TodoItem from './components/TodoItem'
import todosData from './todosData'
import './App.css';
import './style.css'

class App extends React.Component{
  
  constructor(){
    super()
    this.state = {
          todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }
    handleChange(id) {
      this.setState(currState => {
        const newData = currState.todos.map(todo=>{
          if(todo.id === id){
           return{
             ...todo,
             completed : !todo.completed
           }
          }
          return todo
        })
        return{
          todos: newData
        }
      })


    }
  render(){
    const data= this.state.todos.map(pointer=><TodoItem key={pointer.id} Pointer={pointer} 
      handleChange={this.handleChange}
      />) 
    return (
      <div className = "todo-list">
        {data}
      </div>
     );
  }
  
}

export default App;
