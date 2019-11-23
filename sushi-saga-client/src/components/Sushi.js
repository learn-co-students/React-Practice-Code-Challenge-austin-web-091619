import React, { Fragment } from 'react'

const Sushi = (props) => {

const {img_url, name, price, eaten, id} = props.sushiProp



  return (
    <div id={id} className="sushi">
      <div id={id} className="plate" 
           onClick={props.handleEatSushi}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          eaten ?
            null
          :
            <img id={id} src={img_url} alt={name} width="100%" />
        }
      </div>
      <h4 id={id} className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi