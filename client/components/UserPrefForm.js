import React from "react";
import { connect } from "react-redux";

class UserPrefForm extends React.Component {
  constructor() {
    super();
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {}
  componentDidUpdate() {}
  render() {
    return (
      <div>
        <h1>What is most important to you in a city?</h1>
        <form>
          <h3>Primary Choices</h3>

          <select value={this.state.value} onChange={this.handleChange}>
            <option>- Select -</option>
            <option value="healthcare">Quality Healthcare</option>
            <option value="pollution">Low Pollution</option>
            <option value="transportation">
              High Public Transportation (Train & Bus)
            </option>
            <option value="daycare">Lowest daycare cost</option>
            <option value="warm">Warm Weather year round</option>
            <option value="snowy">Snowy Winter Weather</option>
          </select>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default connect(UserPrefForm)(UserPrefForm);
