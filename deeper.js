
var TodoForm = React.createClass({
	getInitialState: function() {
  	return {task: "Eh"};
  },
  saveNewTask: function(e) {
  	e.preventDefault();
  	this.props.mubereki(this.state.task);
    this.setState({task: ""});
  },
  editTask: function(e) {
  	this.setState({task: e.target.value});
  },
	render: function() {
		return (
    	<form onSubmit={this.saveNewTask}>
      	<div>
        	<span>
          	<input value={this.state.task} onChange={this.editTask}/>
            <input type="submit"/>
          </span>
        </div>
      </form>
     );
	}
});

var TodoItem = React.createClass({
	render: function() {
  	return <li>{this.props.basa.task}</li>;
  }
});

var TodoList = React.createClass({
	getInitialState: function() {
  	return {tasks: this.props.tasks};
 	},
  render: function() {
	  	return (
      	<ul>
      		{this.leitems()}
        </ul>
      );
	},
	leitems: function() {
		return this.state.tasks.map(function(task){
    	return <TodoItem basa={task}/>;
    });
  }
});

var TodoApp = React.createClass({
	getInitialState: function() {
		return {
    		tasks: [
					{id: 0, task: "Mow"},
					{id: 1, task: "Loan"},
      	]
		};
	},

  	mwana: function(task) {
  		alert(task);
      var basa = {id: Date.now(), task: task};
      var newTasks = this.state.tasks.concat(basa);
      console.log(newTasks);
      this.setState({tasks: newTasks});
  	},

	render: function() {
		return (
			<div className="todoApp">
				<div>Items to do: {this.state.tasks.length}</div>
        <TodoList tasks={this.state.tasks} />
				<TodoForm mubereki={this.mwana} />
			</div>
		);
	}

});

ReactDOM.render(<TodoApp />, document.getElementById('container'));