import React, { Component } from 'react';
import style from './App.css'

class App extends Component {

	constructor(props) {
		super(props);
      this.state = {Message:[]};
	}

   getMessage(){
      fetch('/message', {
         method: 'GET',
         headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      }})
      .then(function(res){return res.json()})
      .then(json=>{
         this.setState({"Message":json.Message})
      })
   }

   componentDidMount(){
      setInterval(this.getMessage.bind(this),500)
   }

	render() {

		return (
			<div className="App">
                <h1> Message Board </h1>
            <WritePlace/>

				{
               this.state.Message.map((item) => (
                  <MessageBlock key={item.time} time={item.time} content={item.content}/>
               ))
            }
			</div>
		);
	
	};
};

class MessageBlock extends Component {

   constructor(props) {
      super(props);
   }

   render() {

      return (
         <div className={style.MessageBlock}>
            {this.props.time}<br/>
            {this.props.content}
         </div>
      );
   
   }
}

class WritePlace extends Component {

   constructor(props) {
      super(props);
      this.state={"content":""}
      this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
   }

   handleChange(e){
      this.setState({ "content": e.target.value });
   }

   handleClick(e){
      let d = new Date();
      fetch('/message', {
         method: 'POST',
         headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
         },
          body: JSON.stringify({
             "time":d.toString(),
             "content": this.state.content,
         })
      })
   }

   render() {

      return (
         <div className="WritePlace">
            <textarea onChange={ this.handleChange } />
            <button onClick={this.handleClick }>push</button>
         </div>
      );
   
   }
}
export default App;
