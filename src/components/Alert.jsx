import React from 'react'

export default props = () => (
    <div class={`alert alert-dismissible alert-${props.color}`}>
        <p>{props.text}</p>
    </div>
)