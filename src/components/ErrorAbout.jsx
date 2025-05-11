import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorAbout = () => {

const error = useRouteError();

  return (
    <div>ErrorAbout custom one</div>
  )
}

export default ErrorAbout