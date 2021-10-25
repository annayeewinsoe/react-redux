import React, { Component } from 'react'
import { connect } from 'react-redux'

class Posts extends Component {
   render() {
      // console.log(this.props)
      const { posts, deletePost } = this.props 
      return (
         <div id="posts">
            <h1>Posts</h1>
            {posts.length ? (posts.map(post => (
               <div className="post" key={post.id}>
                  <h2>{post.title}</h2>
                  <p>{post.body}</p>
                  <button className="btn-delete"
                   onClick={() => deletePost(post.id)}>Delete</button>
               </div>
            ))   
            ) : (
               <h3>No posts were found</h3>
            )}
            <div id="scroll-post" />
         </div>
      )
   }
}

const mapStateToProps = (state) => {
   return {
      posts: state.posts
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      deletePost: (id) => dispatch({ type: 'DEL_POST', id: id })
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)