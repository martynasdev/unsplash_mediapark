import React, { Component } from 'react';

export default class SearchForm extends Component {
	state = {
		searchField: ''
	};

	onSearchChange = e => {
		this.setState({ searchField: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.onSearch(this.query.value);
		e.currentTarget.reset();
	};

	render() {
		return (
			<form className="search-form" onSubmit={this.handleSubmit}>
				<input
					type="search"
					onChange={this.onSearchChange}
					ref={input => (this.query = input)}
					name="search"
					placeholder="Search..."
				/>
				<button type="submit" id="submit" className="search-btn">
					Search
				</button>
			</form>
		);
	}
}