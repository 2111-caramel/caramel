import React from "react";
import { connect } from "react-redux";
import { fetchThreeCities } from "../store/threeCitties";

class UserPrefForm extends React.Component {
  constructor() {
    super();
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    
   // console.log("IN COMPONTEN DID MOUNT DETAIL", this.props.location.state.detail)
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
    //  this.props.history.location.search = this.state.value
    // this.props.history.push({
    //   pathname: '/preferences',
    //   search: '?query=abc',
    //   state: { detail: this.state.value }
    // })
    this.props.match.params.model = this.state.value
    this.props.history.push(`/preferences/${this.state.value}`); 
      console.log("PARAMS HERE---->", this.props.match.params)
    //console.log("IN COMP UpDATE for history--->>", this.props.history.location.state.detail)
      fetchThreeCities(this.state.value);
      // console.log("Params ID---->>>", this.props.match.params);
    }
  }

  handleChange(e) {
    //this.props.match.params = e.target.value;
    //this.props.history.push();
    this.setState({
      value: e.target.value,
    });
    fetchThreeCities(this.state.value);
  }
  render() {
    return (
      <div>
        <h1>What is most important to you in a city?</h1>
        <form>
          <h3>Primary Choices</h3>

          <select value={this.state.value} onChange={this.handleChange}>
            <option>- Select -</option>
            <option value="Healthcare">Quality Healthcare</option>
            <option value="Pollution">Low Pollution</option>
            <option value="Transportation">
              High Public Transportation (Train & Bus)
            </option>
            <option value="LivingCost">Lowest daycare cost</option>
            <option value="Weather-warm">Warm Weather year round</option>
            <option value="Weather-snow">Snowy Winter Weather</option>
          </select>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

const mapState = (state) => {
  console.log("IN MY MAP STATE____>", state);
  return {
    laodCities: state.threeCities,
  };
};

const mapDispatch = (dispatch) => {
  //console.log("in map dispatch------>", dispatch(fetchThreeCities()));
  return {
    gettingThreeCities: (selection) => dispatch(fetchThreeCities(selection)),
  };
};
export default connect(mapState, mapDispatch)(UserPrefForm);
