import React, { Component } from 'react';

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
      setInterval(this.getMessage.bind(this),1000)
   }

	render() {

		return (
			<div className="App">
            <WritePlace/>

				{
               this.state.Message.map((item) => (
                  <MessageBlock key={item.time.second} time={item.time.date} content={item.content}/>
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
         <div className="MessageBlock">
            {this.props.time.minute}<br/>
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
             "time":{"Month":d.getMonth()+1 ,"date":d.getDate(),"hour":d.getHours(),"minute":d.getMinutes(),"second":d.getTime()},
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
