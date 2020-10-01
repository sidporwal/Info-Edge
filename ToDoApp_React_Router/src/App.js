import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import { LogIn, UserList, Home, SignUp, ToDoComponent } from './components';
import { Bucket, ToDo, Details } from './Modules/Module';

import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  //Form validation
  validate = () => {
    let { userName, passWord } = this.state;
    if (userName === '') {
      this.setState({ userName: 'Please Enter a UserName' });
      return false;
    }
    else if (passWord === '') {
      this.setState({ userName: 'Please Enter a Password' });
      return false;
    }
    else if (userName !== passWord) {
      this.setState({ userName: 'UserName and PassWord should be same' });
      return false;
    }
    return true;
  }

  //Submit Login Page
  handleSubmit = event => {
    event.preventDefault();
    if (this.validate()) {
      let active = -1;
      let todolist = [];
      for (let i = 0; i < this.state.users.length; i++) {
        if (this.state.users[i].username === this.state.userName) {
          active = this.state.users[i].id;
          todolist = this.state.userTodo[i].task;
          break;
        }
      }
      if (active === -1) {
        this.setState({ userName: 'Please enter valid Username, shown on the right side of Page' });
      }
      else {
        this.setState({ activeUser: active, toDoList: todolist, visibleForm: 'USER_TODO' });
      }
      this.props.history.push(`/ToDo/${active}`);
      //console.log(this.props);
    }

  }


  //Add Task to the User ToDo
  handleAddTodo = (e) => {
    e.preventDefault();
    if (this.state.inputToDO === '') {
      this.setState({ inputToDO: 'Please Enter a Task to Add' });
    }
    else {
      let todo = new ToDo(this.state.inputToDO);
      let { userTodo } = this.state;
      let taskUser = userTodo[this.state.activeUser - 1].task.concat(todo);
      this.setState({ userTodo: taskUser, toDoList: userTodo[this.state.activeUser - 1].task, inputToDO: '' });
    }
  }

  //Show All ToDo Tasks
  handleAllTask = () => {
    let { userTodo, activeUser } = this.state;
    let todolist = userTodo[activeUser - 1].task;
    this.setState({ toDoList: todolist });
  }

  //Show Active Task
  handleActiveTask = () => {
    let { toDoList, userTodo, activeUser } = this.state;
    toDoList = userTodo[activeUser - 1].task;
    let activetodolist = toDoList.filter(todo => todo.active);
    this.setState({ toDoList: activetodolist });
  }

  //Show Completed Task
  handleCompletedTask = () => {
    let { toDoList, userTodo, activeUser } = this.state;
    toDoList = userTodo[activeUser - 1].task;
    let cmpltdtodolist = toDoList.filter(todo => !todo.active);
    this.setState({ toDoList: cmpltdtodolist });
  }

  //Delete ToDo Task
  handleDeleteTask = (event) => {
    const { name } = event.target;
    let { userTodo, activeUser } = this.state;
    let todolist = userTodo[activeUser - 1].task;
    for (let i = 0; i < todolist.length; i++) {
      if (todolist[i].time === +name) {
        todolist.splice(i, 1);
        break;
      }
    }
    userTodo[activeUser - 1].task = todolist;
    this.setState({ userTodo, toDoList: todolist });
  }

  //After Change in Checkbox checked or Uncheked in ToDo List
  handleCheckbox = (event) => {
    let { name, checked } = event.target;
    let { userTodo, activeUser, toDoList } = this.state;
    let todolist = userTodo[activeUser - 1].task;
    for (let i = 0; i < todolist.length; i++) {
      if (todolist[i].time === +name) {
        if (checked) {
          //Task Completed
          todolist[i].checked = true;
          todolist[i].active = false;
        }
        else {
          //Task Resumed
          todolist[i].checked = false;
          todolist[i].active = true;
        }
        break;
      }
    }
    userTodo[activeUser - 1].task = todolist;
    toDoList = todolist;
    this.setState({ userTodo, toDoList });
  }

  //Logout from current User ToDo
  handleLogOut = () => {
    this.setState({ visibleForm: 'LOG_IN', userName: '', passWord: '' });
  }

  //Handling click on User List
  handleUserClick = (event) => {
    let { id } = event.target;
    if (id !== '') {
      this.setState({ userName: id, passWord: id });
    }
    this.props.history.push("/LogIn");
  }


  //Redirect to home
  handleHome = () => {
    this.setState({ visibleForm: 'HOME' });
  }

  //Redirect to Sign Up
  handleSignUp = () => {
    this.setState({ visibleForm: 'SIGN_UP' });
  }

  //Redirect to LogIn
  handleLogin = () => {
    this.setState({ visibleForm: 'LOG_IN' });
  }


  // Validate Form Data
  validate1 = () => {
    let { name, uName, eMail, phone } = this.state;
    if (name === '') {
      this.setState({ name: "Please Enter your name" });
      return false;
    }
    else if (uName === '') {
      this.setState({ uName: "Please Enter your UserName" });
      return false;
    }
    else if (eMail === '') {
      this.setState({ eMail: "Please Enter your Email" });
      return false;
    }
    else if (phone === '') {
      this.setState({ phone: "Please enter your Phone No." });
      return false;
    }
    return true;

  }

  //Sign Up submit button

  handleSignUpSubmit = (event) => {
    event.preventDefault();
    if (this.validate1()) {
      let { name, uName, eMail, phone, users, userTodo } = this.state;
      let id = users.length + 1;
      let person = new Details(id, name, uName, eMail, phone);
      users = users.concat(person);
      let bkt = new Bucket(id);
      userTodo = userTodo.concat(bkt);
      this.setState({ users, userTodo, visibleForm: 'LOG_IN', userName: uName, passWord: uName });
      this.props.history.push("/LogIn");
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then((user) => {
        let task = [];
        for (let i = 0; i < user.length; i++) {
          let bkt = new Bucket(user[i].id);
          task.push(bkt);
        }
        this.setState({ users: user, userTodo: task });
      });
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/SignUp">
            <SignUp handleChange={this.handleChange} name={this.state.name} uName={this.state.uName} eMail={this.state.eMail} phone={this.state.phone}
              handleSignUpSubmit={this.handleSignUpSubmit} handleLogin={this.handleLogin} handleHome={this.handleHome} />
          </Route>
          <Route exact path="/LogIn">
            <LogIn userName={this.state.userName} passWord={this.state.passWord} handleSubmit={this.handleSubmit}
              handleChange={this.handleChange} />
          </Route>
          <Route exact path={["/ToDo/:id", "/ToDo/:id/:tasksStatus"]}>
            <ToDoComponent inputToDO={this.state.inputToDO} handleInputTodo={this.handleChange} handleAddTodo={this.handleAddTodo} handleAllTask={this.handleAllTask}
              handleLogOut={this.handleLogOut} handleActiveTask={this.handleActiveTask} handleCompletedTask={this.handleCompletedTask} handleCheckbox={this.handleCheckbox}
              handleDeleteTask={this.handleDeleteTask} toDoList={this.state.toDoList} userName={this.state.userName} />
          </Route>
          <Route exact path="/">
            <Home handleSignUp={this.handleSignUp} handleLogin={this.handleLogin} />
          </Route>
        </Switch>
        <UserList users={this.state.users} handleUserClick={this.handleUserClick} />
      </div>
    );
  }
}

export default withRouter(App);