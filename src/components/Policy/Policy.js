import React, { useState, useEffect } from 'react';
import Section from '../Section/Section';
import Spinner from '../Spinner/Spinner';
import * as api from '../api';
import './Policy.css';

const Policy = props => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const { accessToken } = props;
    window.scrollTo(0, 0);
    // this setTimeout for demonstration of loading Spinner animation purposes only, to show behaviour in the event of making longer/slower API calls. Comment out lines 14 + 19 as desired.
    setTimeout(() => {
      return api.getPolicy(accessToken).then(data => {
        setData(data)
      })
    }, 2000)
  }, [props])

  let toRender = <div className="SpinnerContainer"><Spinner /></div>
  if (data.policy) {
    toRender = (
      <div className="Policy">
        <div className="h1Container">
          <h1>Your Policy</h1>
        </div>
        <div className="policyDetailsContainer">
          {Object.entries(data).map((section, i) => (<Section section={section} key={i} />))}
        </div>
      </div>
    )
  }

  return (
    <div className="PolicyContainer">
      {toRender}
    </div>
  )

}

export default Policy;