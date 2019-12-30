import React from 'react';
import NormalRoom from './ClickedRoom.view';


export default class RoomClicked extends React.Component {

  render() {
    return (
          <div>
            <h4>{`${this.props.code} ${this.props.appointment.code}`}</h4>            
          </div>
    ) 
  }
}  