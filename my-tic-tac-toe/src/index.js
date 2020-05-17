import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

class Board extends Component{
	constructor(props){
		super(props);
		this.state = {
			squares: Array(9).fill(null)
		};
	}

	renderSquare(i){
		return (
			<Square 
				value={ this.state.squares[i] }
				onClick={() => this.handleClick(i)}
			/>
		);
	}

	handleClick(i){
		const square = this.state.squares.slice();
		square[i] = 'x';
		this.setState({ square: square });
	}

	render() {
		const status = 'Next player: X';

		return (
			<div>
				<div className="status">{status}</div>
				<div className="board-row">
					{this.renderSquare(0)}
					{this.renderSquare(1)}
					{this.renderSquare(2)}
				</div>
				<div className="board-row">
					{this.renderSquare(3)}
					{this.renderSquare(4)}
					{this.renderSquare(5)}
				</div>
				<div className="board-row">
					{this.renderSquare(6)}
					{this.renderSquare(7)}
					{this.renderSquare(8)}
				</div>
			</div>
		);
	}
}

class Square extends Component{

	constructor(props){
		super(props);
		this.state = {
			value: null
		};
	}

	render(){
		return (
			<button 
				className='square' 
				onClick={() => this.setState({value: 'X'})}
			>
				{this.state.value}
			</button>
		);
	}
}

class Game extends Component {
	render() {
		return (
			<div className="game">
				<div className="game-board">
					<Board />
				</div>
				<div className="game-info">
					<div>{/* status */}</div>
					<ol>{/* TODO */}</ol>
				</div>
			</div>
		);
	}
}

ReactDOM.render(
	<React.StrictMode>
		<Game />
	</React.StrictMode>,
	document.getElementById('root')
);

serviceWorker.unregister();
