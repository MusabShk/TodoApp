import React from "react";    //importing react
import logo from "./logo.png";   //importing logo
import "./App.css";

class App extends React.Component{      //giving class name as App bcz index.js is importing app

  constructor(props){    //if we throw other components in this file, then we can only read if we have **props**
      super(props);
      this.state={
        newItem:"",
        list:[]
      }
  }

  addItem(todoValue){
    if(todoValue!==""){
      const newItem={  //new object is created
        id:Date.now(),
        value:todoValue,
        isDone:false,
      };
      const list=[...this.state.list];   //...(means append all existing values into list array)
      list.push(newItem);

      this.setState({       //whenever in react to update state, we use this
        list,         //as the name is same on both places as list, no ned to write as (list:....)
        newItem:"",
      })          
    }
  }

  deleteItem(id){
    const list=[...this.state.list];        //now we are having the copy of the list here
    const updatedList=list.filter(item=>item.id!==id);    //this will create a list which omits the value which matches the id
    this.setState({list:updatedList})
  }

  updateInput(input){
    this.setState({newItem:input})
  }

  render (){
    return(
      <div>
        <img src={logo} width="100" height="100" className="logo"/>
        <h1 className="app-title">ToDo App</h1>
        <div className="container">
            Add an item...
            <br/>
            <input type="text" className="input-text" placeholder="Write a Todo" required value={this.state.newItem} onChange={e=>this.updateInput(e.target.value)} />
            <button className="add-btn" onClick={()=>this.addItem(this.state.newItem)} disabled={!this.state.newItem.length} >Add Todo</button>
            <div className="list">
              <ul>
                {this.state.list.map(item=>{    //map is feature of js
                  return(
                    <li key={item.id}>        
                      <input type="checkbox" name="isDone" checked={item.isDone} onChange={()=>{}} />
                      {item.value}
                      <button className="btn" onClick={()=>this.deleteItem(item.id)}>Delete</button> 
                    </li>
                  );
                })}       
                <li>
                  <input type="checkbox" name="" id="" />
                    Record utube videos
                  <button className="btn">Delete</button>
                </li>
              </ul>
            </div>
        </div>
      </div>
    )
  }
}

export default App;  //exporting the app 