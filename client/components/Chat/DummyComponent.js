import React from "react";
import { connect } from "react-redux";
import { fetchMessages, postMessage } from "../../store/chat";

class DummyComponent extends React.Component {
  constructor(){
    super()
    this.state = {
           content: '',
           channelId: 1,
           userId: 1,
           username: "Tommy"
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(evt) {
  this.setState({
    [evt.target.id]: evt.target.value
  });
}

handleSubmit(evt){
  evt.preventDefault();
  this.props.postMessage({...this.state})
  this.props.content = '';
}


  componentDidMount() {
    this.props.loadMessages();
  }

  render() {
    const { handleSubmit, handleChange } = this;
    const { content } = this.state
    console.log("dummy props", this.props);
    //console.log(this.props.messages)
    return (
      <div>
        {this.props.messages.messages.map((message) => {
          return (
            <div id={message.id}>
              <p>Message: {message.content}</p>
              {/* <p>Name: {message.user.username}</p> */}
            </div>
          );
        })}
        <form id = "message" onSubmit = {handleSubmit}>
          <label  htmlFor = "input-field">Input Message</label>
          <input type = "text" id = "content" onChange = {handleChange} value = {content}></input>
          <button type = "submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  messages: state.messages,
});

const mapDispatchToProps = (dispatch) => ({
  loadMessages: () => dispatch(fetchMessages()),
  postMessage: (message) => dispatch(postMessage(message))
});
export default connect(mapStateToProps, mapDispatchToProps)(DummyComponent);
