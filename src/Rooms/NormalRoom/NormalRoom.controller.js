import React from 'react';
import NormalRoom from './NormalRoom.view';

const formatAMPM = (date) => {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

let selectedRoomId;

export default class RoomNormal extends React.Component {  

  state = {
    isClicked: false
  }
  

  roomTogle = () => {
    this.setState({
      isClicked: !this.state.isClicked
    })
    selectedRoomId = this.props.id;
    console.log(selectedRoomId);  
  }

  render() {
    return (
      <NormalRoom.Room onClick={this.roomTogle}>
        <h4>{`${this.props.code} ${this.props.appointment.code}`}</h4>
        <div>{`${this.props.appointment.first_name} ${this.props.appointment.last_name}`}</div>
        <div>{`${this.props.status.title}`}</div>
        <div>{`Time: ${formatAMPM(new Date)}`}</div>
        <div>{`${this.props.appointment.doctor_title}`}</div>
        <div>{`A: ${this.props.appointment.assistant}`}</div>
      </NormalRoom.Room>
    ) 
  }
}  