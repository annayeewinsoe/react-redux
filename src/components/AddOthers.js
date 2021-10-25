import React, { Component } from 'react'
import { connect } from 'react-redux'

class AddOthers extends Component {
   state = {
      hobby: '',
      place: ''
   }
   handleChange = (e) => {
      this.setState({
         [e.target.id]: e.target.value
      })
   }
   handleHobby = (e) => {
      e.preventDefault()
      this.props.addHobby(this.state.hobby)
      const scroll = document.getElementById('scroll-hobby')
      scroll.scrollIntoView({behavior: "smooth", block: "center", inline: "center"})
      this.setState({ hobby: '' })
   }
   handlePlace = (e) => {
      e.preventDefault()
      this.props.addPlace(this.state.place)
      const scroll = document.getElementById('scroll-place')
      scroll.scrollIntoView({behavior: "smooth", block: "center", inline: "center"})
      this.setState({ place: '' })
   }
   render() {
      return (
         <div id="add-others">
            <form onSubmit={this.handleHobby}>
               <input type="text" placeholder="What is your hobby?"
                  onChange={this.handleChange} id="hobby" value={this.state.hobby} />
               <input type="submit" value="Add Hobby" className="btn-submit btn-others" />
            </form>

            <form onSubmit={this.handlePlace}>
               <input type="text" placeholder="What is your favorite place to visit?" onChange={this.handleChange} id="place" value={this.state.place} />
               <input type="submit" value="Add Place" className="btn-submit btn-others" />
            </form>

            <p>Hi ! My name is <strong>Su Pyae Yee</strong> and I'm a very passionate React Developer. I used Redux in this app.</p>
         </div>
      )
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addHobby: (hobby) => dispatch({ type: 'ADD_HOBBY', hobby: hobby }),
      addPlace: (place) => dispatch({ type: 'ADD_PLACE', place: place })
   }
}

export default connect(null, mapDispatchToProps)(AddOthers)