import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushis.map((sushiData, idx) => <Sushi handleEatSushi={props.handleEatSushi} sushiProp={sushiData} key={idx} />)
        }
        <MoreButton handleMoreButton={props.handleMoreButton} />
      </div>
    </Fragment>
  )
}

export default SushiContainer