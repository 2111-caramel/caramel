// import React, { Component } from 'react'
// import Message from './Message'
// import NewMessageEntry from './NewMessageEntry'
// import { connect } from 'react-redux'
// import fetchMessages from '../../store/chat'

// export class MessageList extends React.Component{

//     componentDidMount () {
//         this.props.loadMessages();
//     }

//     render(){
//     const channelId = Number(props.match.params.channelId) // because it's a string "1", not a number!
//     const messages = this.props.messages
//     const filteredMessages = messages.filter(
//         message => message.channelId === channelId
//     )

//     return (
//         <div>
//             <ul className="media-list">
//                 {filteredMessages.map(message => (
//                     <Message message={message} key={message.id} />
//                 ))}
//             </ul>
//             <NewMessageEntry channelId={ channelId }/>
//         </div>
//     )
// }
// }
// const mapStateToProps = state => ({
//     messages: state.messages,
// })

// const mapDispatchToProps = (dispatch) => ({
//     loadMessages: () => dispatch(fetchMessages())
// })
// export default connect(mapStateToProps, mapDispatchToProps)(MessageList)