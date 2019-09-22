import React from "react";
import Header from "./Header";
import StarshipsList from "./StartshipsList";
import getDataFromApi from "../services/getDataFromApi";
import "../scss/App.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      starships: [],
      filterValue: ""
    };
    this.handleFilter = this.handleFilter.bind(this);
  }
  componentDidMount() {
    getDataFromApi().then(starships => {
      this.setState({ starships });
    });
  }
  handleFilter(event) {
    const newState = {
      ...this.state,
      filterValue: event.currentTarget.value
    };
    this.setState(newState);
  }
  render() {
    const filteredStarships = this.state.starships.filter(starship =>
      starship.name.toLowerCase().includes(this.state.filterValue.toLowerCase())
    );
    return (
      <div className="page">
        <Header />
        <form className="filter">
          <label className="filter_label" htmlFor="filter">
            Busca
          </label>
          <input type="text" onChange={this.handleFilter}></input>
        </form>
        <StarshipsList starships={filteredStarships} />
      </div>
    );
  }
}

export default App;
