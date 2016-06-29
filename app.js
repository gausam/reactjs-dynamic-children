var TodoForm = React.createClass({
	getInitialState: function() {
		return {task: ""};
	},
	
	saveNewTask: function(e) {
		e.preventDefault();
		if (!this.state.task) return;
		this.props.addTodo(this.state.task);
		this.setState({task: ""});
	},
  
  	onChange: function(e) {
		this.setState({task: e.target.value});
  	},

	render: function() {
		return (
			<form onSubmit={this.saveNewTask}>
				<div>
					<span>
						<input value={this.state.task} onChange={this.onChange} placeholder="Enter the new task's name.."/>
						<input type="submit"/>
			  		</span>
				</div>
	  		</form>
	 	);
	}
});

var TodoList = React.createClass({
	render: function() {
		return (
			<ul>
				{this.props.todos.map(function(todo) {
					return <li key={todo.id}>{todo.task} - <button onClick={function(){ this.props.deleteTodo(todo.id) }.bind(this, todo) }>Delete</button></li>;
		  		}, this)}
			</ul>
	  	);
	}
});

var TodoApp = React.createClass({
	getInitialState: function() {
		return {
			todos: [
					{id: 1, task: "Mow"},
					{id: 2, task: "Loan"},
		]
		};
	},

	addTodo: function(task) {
		var todo = {
			id: Date.now(),
			task: task
		};

	  	var newTodos = this.state.todos;

	  	this.setState({
	  		todos: newTodos.concat(todo)
	  	});
	},

	deleteTodo: function(todoId) {
	  for (var i = 0; i < this.state.todos.length; i++) {
		if (this.state.todos[i].id === todoId) {
			var newTodos = this.state.todos;
		 	newTodos.splice(i, 1);
		  	this.setState({todos: newTodos});
		  	return;
		}
	  }
	},

	render: function() {
		return (
			<div className="todoApp">
				<div>
					Items to do: {this.state.todos.length}
				</div>
				<TodoList todos={this.state.todos} deleteTodo={this.deleteTodo}/>
				<TodoForm addTodo={this.addTodo} />
			</div>
		);
	}

});

ReactDOM.render(<TodoApp />, document.getElementById('container'));
