import React, { Component } from 'react';
import axios from 'axios';
import './App.scss';
import ImagesList from './_components/ImagesList';
import SearchForm from './_components/SearchForm';

const api_key = "6a607ad5a706db7d4ee36062f61b56824bc56d105312739503bb75aa0fee5915";
export default class App extends Component {
	constructor() {
		super();
		this.state = {
			images: [],
			loadingState: true
		};
	}

	componentDidMount() {
		this.searchByQuery();
	}

	searchByQuery = (query = 'code') => {
		axios
			.get(
				`https://api.unsplash.com/search/photos/?page=1&per_page=20&query=${query}&client_id=${api_key}`
			)
			.then(data => {
				this.setState({ images: data.data.results, loadingState: false });
			})
			.catch(error => {
				console.log('Fetching error! Check this out:', error);
			});
	};

	render() {
		return (
			<div>
				<div className="main-header">
					<div className="inner">
						<h1 className="main-title">Simple Images Search API (unsplash.com)</h1>
					</div>
				</div>
                <div className="search-container">
					<SearchForm onSearch={this.searchByQuery} />
                </div>
				<div className="main-content">
					{this.state.loadingState
						? <p>Loading photos</p>
						: <ImagesList data={this.state.images} />}
				</div>
			</div>
		);
	}
}