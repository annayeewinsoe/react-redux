import React, { Component } from 'react'
import { connect } from 'react-redux'

class AddPost extends Component {
   state = {
      title: '',
      body: '',
      id: 4
   }
   handleChange = (e) => {
      this.setState({
         [e.target.id]: e.target.value
      })
   }
   handleSubmit = (e) => {
      e.preventDefault()
      this.setState({
         id: Math.random() * Math.random()
      })
      this.props.addPost(this.state)
      const scroll = document.getElementById('scroll-post')
      scroll.scrollIntoView({behavior: "smooth", block: "center", inline: "center"})
      this.setState({
         title: '',
         body: '',
      })
   }
   render() {
      return (
         <form id="add-post" onSubmit={this.handleSubmit}>
            <h2>Add Post</h2>
            <input type="text" placeholder="Title" value={this.state.title}
               onChange={this.handleChange} id="title" />
            <textarea placeholder="Body" value={this.state.body}
               onChange={this.handleChange} id="body" />
            <input type="submit" value="Add Post" className="btn-submit" />
         </form>
      )
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addPost: (post) => dispatch({ type: 'ADD_POST', post: post })
   }
}

export default connect(null, mapDispatchToProps)(AddPost)