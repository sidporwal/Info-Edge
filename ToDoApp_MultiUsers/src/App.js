import React from 'react';
import './App.css';
import {LogIn} from './components';
import {UserList} from './components';
import {ToDoComponent} from './components';
import {Bucket, ToDo} from './Modules/Module';

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      users: [],
      userName: '',
      passWord: '',
      inputToDO: '',
      activeUser: -1,
      userTodo: [],
      toDoList: [],
      visibleForm: 'LOG_IN'
    };
  };
  
  handleChange = (event) => {
    const {value,name} = event.target;
    this.setState({[name]: value});
  }

  handleSubmit = event =>{
    event.preventDefault();
    let {userName, passWord} =this.state;
    if(userName==''){
      this.setState({userName: 'Please Enter a UserName'});
    }
    else if(passWord==''){
      this.setState({userName: 'Please Enter a Password'});
    }
    else if(userName!=passWord){
      this.setState({userName: 'UserName and PassWord should be same'});
    }
    else{
      let active=-1;
      let todolist=[];
      for(let i=0;i<this.state.users.length;i++){
        if(this.state.users[i].username===this.state.userName){
          active=this.state.users[i].id;
          todolist=this.state.userTodo[i].task;
        }
      }
      if(active==-1){
        this.setState({userName: 'Please enter valid Username, shown on the right side of Page'});
      }
      else{
        this.setState({activeUser: active, toDoList: todolist, visibleForm: 'USER_TODO',userName: '', passWord: ''});
      }
    }
  }
  
  handleAddTodo = () => {
    if(this.state.inputToDO==''){
      this.setState({inputToDO: 'Please Enter a Task to Add'});
    }
    else{
      let todo= new ToDo(this.state.inputToDO);
      let {userTodo} = this.state;
      userTodo[this.state.activeUser-1].task.push(todo);
      this.setState({userTodo, toDoList: userTodo[this.state.activeUser-1].task,inputToDO: ''});
    }
  }
  
  handleAllTask = () => {
    let {userTodo, activeUser} = this.state;
    let todolist = userTodo[activeUser-1].task;
    this.setState({toDoList: todolist}); 
  }

  handleActiveTask = () => {
    let {toDoList, userTodo, activeUser} = this.state;
    toDoList=userTodo[activeUser-1].task;
    let activetodolist= toDoList.filter(todo => todo.active);
    this.setState({toDoList: activetodolist}); 
  }

  handleCompletedTask = () => {
    let {toDoList, userTodo, activeUser} = this.state;
    toDoList=userTodo[activeUser-1].task;
    let cmpltdtodolist= toDoList.filter(todo => !todo.active);
    this.setState({toDoList: cmpltdtodolist}); 
  } 
  
  handleDeleteTask = (event) => {
    const {name} = event.target;
    let {userTodo, activeUser, toDoList} = this.state;
    let todolist=userTodo[activeUser-1].task;
    for(let i=0;i<todolist.length;i++){
      if(todolist[i].time==name){
        todolist.splice(i,1);
        break;
      }
    }
    userTodo[activeUser-1].task=todolist;
    toDoList=todolist;
    this.setState({userTodo, toDoList});
  }

  handleCheckbox = (event) => {
    let {name,checked} = event.target;
    let {userTodo, activeUser, toDoList} = this.state;
    let todolist=userTodo[activeUser-1].task;
    for(let i=0;i<todolist.length;i++){
      if(todolist[i].time==name){
        if(checked){
          //Task Completed
          todolist[i].checked=true;
          todolist[i].active=false;
        }
        else{
          //Task Resumed
          todolist[i].checked=false;
          todolist[i].active=true;
        }
        break;
      }
    }
    userTodo[activeUser-1].task=todolist;
    toDoList=todolist;
    this.setState({userTodo, toDoList});
  }

  handleLogOut = () => {
    this.setState({visibleForm: 'LOG_IN'});
  }

  handleUserClick = (event) => {
    let {id}=event.target;
    if(id!=''){
      this.setState({userName: id, passWord: id});
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(user => this.setState({ users: user}))
    .then( () => {
      let {users, userTodo} = this.state;
      for(let i=0;i<users.length;i++){
        let bkt=new Bucket(users[i].id);
        userTodo.push(bkt);
      }
      this.setState({userTodo});
    })
  }

  renderSwitch = () => {
    let {visibleForm}=this.state;
    switch(visibleForm){
      case 'LOG_IN':
        return (
          <LogIn userName={this.state.userName} passWord={this.state.passWord} handleSubmit={this.handleSubmit} 
          handleChange={this.handleChange}/>
        );
      case 'USER_TODO':
        return (
          <ToDoComponent  inputToDO={this.state.inputToDO} handleInputTodo={this.handleChange} handleAddTodo={this.handleAddTodo} handleAllTask={this.handleAllTask} handleLogOut={this.handleLogOut}
        handleActiveTask={this.handleActiveTask} handleCompletedTask={this.handleCompletedTask} handleCheckbox={this.handleCheckbox} handleDeleteTask={this.handleDeleteTask} toDoList={this.state.toDoList}/>
        );
    }
  }


  render(){
    const RenderSwitch=this.renderSwitch();
    return (
      <div className="App">
        {RenderSwitch}
        <UserList users={this.state.users} handleUserClick={this.handleUserClick}/>
      </div>
    );
  }
}

export default App;