import React from 'react'

export default props => (
    <button type="submit" onClick={props.onClick} className="btn btn-primary" data-toggle="modal" data-target={`#${props.id}`} >
    {props.text}
  </button>
)