import React from 'react';
import axios from 'axios';
import Rooms from './Rooms.view.js';
import RoomNormal from '../Rooms/NormalRoom/NormalRoom.controller'
import RoomClicked from '../Rooms/ClickedRoom/ClickedRoom.controller'


export default class RoomsList extends React.Component {

  state = {
    rooms: []
  }  
  
  componentDidMount() {
    axios.get(`http://localhost:9000/api/rooms.json`)
      .then(res => {
        const rooms = res.data;
        this.setState({ rooms });
      })
  }

  

  render() {
    return (
      <div>
        {this.state.rooms.map((room, index) => (
          <div>
            <RoomNormal {...room} id={index}/>
          </div>  
        ))}
      </div>            
    )      
  }
}
