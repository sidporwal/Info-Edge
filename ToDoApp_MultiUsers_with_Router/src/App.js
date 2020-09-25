import React from 'react';
import './App.css';
import {LogIn} from './components';
import {UserList} from './components';
import {ToDoComponent} from './components';
import {Bucket, ToDo} from './Modules/Module';
import {Home} from './components/Home/Home';
import {SignUp} from './components/SignUp/SIgnUp';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

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
      visibleForm: 'HOME',
      name: '',
      uName: '',
      eMail: '',
      phone: ''
    };
  };
  
  //Handle Username/Password/InputToDO
  handleChange = (event) => {
    const {value,name} = event.target;
    this.setState({[name]: value});
  }
  
  //Form validation
  validate =() => {
    let {userName, passWord} =this.state;
    if(userName==''){
      this.setState({userName: 'Please Enter a UserName'});
      return false;
    }
    else if(passWord==''){
      this.setState({userName: 'Please Enter a Password'});
      return false;
    }
    else if(userName!=passWord){
      this.setState({userName: 'UserName and PassWord should be same'});
      return false;
    }
    return true;
  }

  //Submit Login Page
  handleSubmit = event =>{
    event.preventDefault();
    if(this.validate()){
      let active=-1;
      let todolist=[];
      for(let i=0;i<this.state.users.length;i++){
        if(this.state.users[i].username===this.state.userName){
          active=this.state.users[i].id;
          todolist=this.state.userTodo[i].task;
          break;
        }
      }
      if(active==-1){
        this.setState({userName: 'Please enter valid Username, shown on the right side of Page'});
      }
      else{
        this.setState({activeUser: active, toDoList: todolist, visibleForm: 'USER_TODO'});
      }
    }
  }
  

  //Add Task to the User ToDo
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

  //Show All ToDo Tasks
  handleAllTask = () => {
    let {userTodo, activeUser} = this.state;
    let todolist = userTodo[activeUser-1].task;
    this.setState({toDoList: todolist}); 
  }

  //Show Active Task
  handleActiveTask = () => {
    let {toDoList, userTodo, activeUser} = this.state;
    toDoList=userTodo[activeUser-1].task;
    let activetodolist= toDoList.filter(todo => todo.active);
    this.setState({toDoList: activetodolist}); 
  }

  //Show Completed Task
  handleCompletedTask = () => {
    let {toDoList, userTodo, activeUser} = this.state;
    toDoList=userTodo[activeUser-1].task;
    let cmpltdtodolist= toDoList.filter(todo => !todo.active);
    this.setState({toDoList: cmpltdtodolist}); 
  } 
  
  //Delete ToDo Task
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
  
  //After Change in Checkbox checked or Uncheked in ToDo List
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
  
  //Logout from current User ToDo
  handleLogOut = () => {
    this.setState({visibleForm: 'LOG_IN',userName: '', passWord: ''});
  }
   
  //Handling click on User List
  handleUserClick = (event) => {
    let {id}=event.target;
    if(id!=''){
      this.setState({userName: id, passWord: id});
    }
  }

  handleHome = () => {
    this.setState({visibleForm: 'HOME'});
  }

  handleSignUp = () => {
    this.setState({visibleForm: 'SIGN_UP'});
  }

  handleLogin = () => {
    this.setState({visibleForm: 'LOG_IN'});
  }

  handleSignUpSubmit = (event) => {
    event.preventDefault();

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


  //Dynamically Display Content
  renderSwitch = () => {
    let {visibleForm}=this.state;
    switch(visibleForm){
      case 'HOME':
        return (
          <Home handleSignUp={this.handleSignUp} handleLogin={this.handleLogin}/>
        );

      case 'SIGN_UP':
        return (
          <SignUp handleChange={this.handleChange} name={this.state.name} uName={this.state.uName} eMail={this.state.eMail} phone={this.state.phone}
          handleSignUpSubmit={this.handleSignUpSubmit} handleLogin={this.handleLogin} handleHome={this.handleHome}/>
        );
      case 'LOG_IN':
        return (
          <LogIn userName={this.state.userName} passWord={this.state.passWord} handleSubmit={this.handleSubmit} handleSignUp={this.handleSignUp} 
          handleChange={this.handleChange} handleHome={this.handleHome}/>
        );
      case 'USER_TODO':
        return (
          <ToDoComponent  inputToDO={this.state.inputToDO} handleInputTodo={this.handleChange} handleAddTodo={this.handleAddTodo} handleAllTask={this.handleAllTask} 
          handleLogOut={this.handleLogOut} handleActiveTask={this.handleActiveTask} handleCompletedTask={this.handleCompletedTask} handleCheckbox={this.handleCheckbox} 
          handleDeleteTask={this.handleDeleteTask} toDoList={this.state.toDoList} userName={this.state.userName}/>
        );
    }
  }


  render(){
    //const RenderSwitch=this.renderSwitch();  {RenderSwitch} 
    return (
      <Router>
        <div className="App">
        <Switch>
            <Route exact path="/">
              <Home handleSignUp={this.handleSignUp} handleLogin={this.handleLogin}/>
            </Route>
            <Route exact path="/SignUp">
              <SignUp handleChange={this.handleChange} name={this.state.name} uName={this.state.uName} eMail={this.state.eMail} phone={this.state.phone}
              handleSignUpSubmit={this.handleSignUpSubmit} handleLogin={this.handleLogin} handleHome={this.handleHome}/>
            </Route>
            <Route exact path="/LogIn">
              <LogIn userName={this.state.userName} passWord={this.state.passWord} handleSubmit={this.handleSubmit} 
                handleChange={this.handleChange}/>
            </Route>
            <Route exact path="/ToDo">
              <ToDoComponent  inputToDO={this.state.inputToDO} handleInputTodo={this.handleChange} handleAddTodo={this.handleAddTodo} handleAllTask={this.handleAllTask} 
                handleLogOut={this.handleLogOut} handleActiveTask={this.handleActiveTask} handleCompletedTask={this.handleCompletedTask} handleCheckbox={this.handleCheckbox} 
                handleDeleteTask={this.handleDeleteTask} toDoList={this.state.toDoList} userName={this.state.userName}/>
            </Route>
        </Switch>
          <UserList users={this.state.users} handleUserClick={this.handleUserClick}/>
        </div>
      </Router>
    );
  }
}

export default App;

/*
<Switch>
            <Route path="/">
              <LogIn userName={this.state.userName} passWord={this.state.passWord} handleSubmit={this.handleSubmit} 
                handleChange={this.handleChange}/>
            </Route>
            <Route path="/ToDo">
              <ToDoComponent  inputToDO={this.state.inputToDO} handleInputTodo={this.handleChange} handleAddTodo={this.handleAddTodo} handleAllTask={this.handleAllTask} 
                handleLogOut={this.handleLogOut} handleActiveTask={this.handleActiveTask} handleCompletedTask={this.handleCompletedTask} handleCheckbox={this.handleCheckbox} 
                handleDeleteTask={this.handleDeleteTask} toDoList={this.state.toDoList} userName={this.state.userName}/>
            </Route>
          </Switch>
*/