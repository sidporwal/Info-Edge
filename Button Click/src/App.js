import React from 'react';
import './App.css';
import { Button as ActionButton} from './components/button';
import Text from './components/text-area/text-area.component';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      count: 0,
      arr: []
    };
    //this.onClickUpdate=this.onClickUpdate.bind(this);
  }

  setStateSynchronous(stateUpdate) {
    return new Promise(resolve => {
        this.setState(stateUpdate, () => resolve());
    });
  }

  onClickUpdate = async () => {
    await this.setStateSynchronous(
      state => ({count: state.count+1})
    );
    await this.setStateSynchronous(
      state => ({arr: [...this.state.arr,state.count]}) 
    );
    /*
    this.setState(state => ({
      count: state.count+1,
      arr: [...this.state.arr,state.count] 
    }));*/
  };
  

  render(){
    return (
      <div style={{textAlign: "center"}}>
        <Text count={this.state.count} arr={[this.state.arr]}/>
        <ActionButton onClickUpdate={this.onClickUpdate} />
      </div>
    );
  }
}

export default App;
