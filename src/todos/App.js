import React from 'react';
import styled from 'styled-components';
import ButtonTodo from '../components/todos/Button';
import InputTodo from '../components/todos/Input';
import ListTask from '../components/todos/ListTaks';

const DivContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  border: solid 1px red;
  padding: 10px;
`

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      id: 1,
      work: ""
    }
  }

  // ham co nhiem vu luu state work tu hanh dong nhap du lieu vao o input
  changeWork = (event) => {
    //console.log(event);
    let nameWork = event.target.value;
    if(nameWork !== ''){
      this.setState({
        work: nameWork
      })
    } 
  }

  addTodo = () => {
    this.setState({
      id: this.state.id + 1,
      todos:[...this.state.todos, {
        id_work: this.state.id,
        name_work: this.state.work,
        done: false
      }],
      work: ""
    })
  }

  removeTodo = (id) => {
    // lay ra nhung cong viec ko bi xoa
    let newWorks = this.state.todos.filter(item => item.id_work !== id);
    this.setState({
      ...this.state,
      todos: newWorks
    })
  }

  finishTodo = (id) => {
    let newTodos = this.state.todos.map(item => item.id_work === id ? {...item, done: !item.done} : item);
    this.setState({
      ...this.state,
      todos: newTodos
    })
  }

  render() {
    console.log(this.state.todos);
    return (
      <>
        <DivContainer>
          <InputTodo val={this.state.work} change={this.changeWork} />
          <ButtonTodo add={this.addTodo}>Add</ButtonTodo>
          <ListTask
            listWorks={this.state.todos}
            del={this.removeTodo}
            finish={this.finishTodo}
          />
        </DivContainer>
      </>
    )
  }
}
export default TodoApp;