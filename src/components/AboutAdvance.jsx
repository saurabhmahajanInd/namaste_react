import React, { Component } from 'react';
import useRestaurentDetails from '../utils/useRestaurentDetails'

export default class AboutAdvance extends Component {

  data = useRestaurentDetails();

  render() {
    return (
      <div>AboutAdvance</div>
    )
  }
}
