import React from 'react';

function PlayerPreview(props) {
  return (
    <div>
      <div className='column'>
        <img className='avatar'
        src={props.avatar}
        alt={'Avatar for ' + props.username}/>
        <h2 className='username'>@{props.username}</h2>
        {props.children}
      </div>
    </div>
  )
}

export default PlayerPreview;
