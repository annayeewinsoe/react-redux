import React, { Component } from 'react'
import { connect } from 'react-redux'

class Hobbies extends Component {
   render() {
      const { hobbies, deleteHobby } = this.props
      return (
         <div id="hobbies">
            <h2>Top Hobbies</h2>
            <ul>
               {hobbies.map((hobby, index) => (
                  <li key={index}
                     onClick={() => deleteHobby(hobby)}>{hobby}</li>
               ))}
            </ul>
            <div id="scroll-hobby" />
         </div>
      )
   }
}

const mapStateToProps = (state) => {
   return {
      hobbies: state.hobbies
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      deleteHobby: (hobby) => dispatch({ type: 'DEL_HOBBY', hobby: hobby })
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hobbies)