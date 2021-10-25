import React, { Component } from 'react'
import { connect } from 'react-redux'

class Places extends Component {
   render() {
      const { places, deletePlace } = this.props
      return (
         <div id="places">
            <h2>Best Places to Visit</h2>
            <ul>
               {places.map((place, index) => (
                  <li key={index}
                     onClick={() => deletePlace(place)}>{place}</li>
               ))}
            </ul>
            <div id="scroll-place" />
         </div>
      )
   }
}

const mapStateToProps = (state) => {
   return {
      places: state.places
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      deletePlace: (place) => dispatch({ type: 'DEL_PLACE', place: place })
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Places)