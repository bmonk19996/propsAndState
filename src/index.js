import React, {useState} from 'react';
import ReactDOM from 'react-dom';

// write your Color component here
const Color = (props) => {
  return (
    <div className={props.color} onClick={() =>props.changeColor(props.color)}/>
  )
}
const Picker = () => {
const [selectedColor,setSelectedColor] = useState('')
function changeColor(color) {
  setSelectedColor(color)
}



  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
      <Color color='red' changeColor={changeColor}/>
      <Color color='blue'changeColor={changeColor}/>
      <Color color='black'changeColor={changeColor}/>
      </div>
    </div>
  );
}

ReactDOM.render(
  <Picker />,
  document.getElementById('app')
);