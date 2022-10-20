import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../../redux/reducer'

const IncrementDecrement = () => {

    const {count} = useSelector((state) => state.counter)

    const dispatch = useDispatch();

    

  return (
    <Fragment>
        <div className="container" style={{margin:"80px"}}>
            <p>
              {count}
            </p>
        <button onClick = {() => dispatch(increment())}>Increment</button><br/><br/>
        <button onClick = {() => dispatch(decrement())}>Decrement</button>
        </div>
    </Fragment>
  )
}

export default IncrementDecrement;