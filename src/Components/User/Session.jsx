import * as React from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Session = (props) => {
  const navigate = useNavigate()
  React.useEffect(() => {
    if (!props.token) {
      // navigate('/')
    }
  }, [props, navigate])
  return <></>
}

const mapStateToProps = (state, props) => {
  // console.log("machine state --->", state)
  // console.log('props --->', props)
  return {
    token: state.setUserToken, ...state, ...props
  }
}

const mapActionsToProps = {}

export default connect(mapStateToProps, mapActionsToProps)(Session)
