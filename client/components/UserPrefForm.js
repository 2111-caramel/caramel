import React from "react";
import { connect } from "react-redux";

class UserPrefForm extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>What are your main preferences in a city?</h1>
        <form>
          <h3>Primary Choices</h3>
          <label>Rent</label>
          <select>
            <option>Keep it low as possible</option>
            <option>Pay the average</option>
            <option>Pay above average</option>
          </select>
          <label>Income</label>
          <select value={this.state.value}>
            <option>Lowest</option>
            <option>Average</option>
            <option>Highest</option>
          </select>
          <label>Climate</label>
          <select value={this.state.value}>
            <option>Tropical (50 and up)</option>
            <option>I like to experience winter weather</option>
          </select>
          <hr />
          <h3>Additional preferences</h3>
          <label>Healthcare</label>

          <label>Pollution</label>
          <label>Transportation</label>
          <label>Groceries</label>
        </form>
      </div>
    );
  }
}

export default connect(null)(UserPrefForm);
