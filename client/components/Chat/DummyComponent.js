import React from "react";
import { connect } from "react-redux";
import { fetchMessages, postMessage } from "../../store/chat";

class DummyComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
           content: '',
           channelId: this.props.channelId,
           userId: 1,
           username: "Tommy"
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(evt) {
  this.setState({
    content: evt.target.value
  });
}

handleSubmit(evt){
  evt.preventDefault();
  this.props.postMessage({...this.state})
  this.props.content = '';
  this.setState({           
    content: '',
    channelId: this.props.channelId,
    userId: 1,
    username: "Tommy"})
}


  componentDidMount() {
    this.props.loadMessages();
  }

  render() {
    const { handleSubmit, handleChange } = this;
    const { channelId } = this.props;
    const messages = this.props.messages.messages;
    const { content } = this.state;
    console.log("dummy props", this.props);
    //console.log(this.props.messages)

    const numChannel = Number(channelId)
        const filteredMessages = messages.filter(
        message => message.channelId === numChannel
    )
    return (
      <div>
        {filteredMessages.map((message) => {
          return (
            <div key={message.id}>
              <p>Message: {message.content}</p>
              {/* <p>Name: {message.user.username}</p> */}
            </div>
          );
        })}
        <form id = "message" onSubmit = {handleSubmit}>
          <label  htmlFor = "input-field">Input Message</label>
          <input type = "text" onChange = {handleChange} value = {content}></input>
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
