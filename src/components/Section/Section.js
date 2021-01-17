import React from 'react';
import * as u from '../../utils/utils';
import './Section.css';

const Section = props => {
  const { section } = props;

  const displayObj = (detailsObj, depth) => {
    return Object.entries(detailsObj).map((el, i) => {
      let subheading = u.capsNoUnders(el[0]);
      let details;
      let detailStyle = 'detail';
      if ((typeof el[1] === 'string' || typeof el[1] === 'number') || typeof el[1] === 'boolean') {
        details = <p>{el[1].toString()}</p>
      } else {
        details = displayObj(el[1], depth + 1);
        if (!isNaN(subheading)) subheading = null;
        depth === 2 ? detailStyle = 'convictionsClaimsBox' : detailStyle = 'addressBox';
        // if (depth === 2) {
        //   detailStyle = 'convictionsClaimsBox';
        // } else {
        //   detailStyle = 'addressBox';
        // }
      }
      return (
        <div className={`detailsContainer-${depth}`} key={i}>
          <p className={`subheading`}>{subheading}</p>
          <div className={`${detailStyle}`}>{details}</div>
        </div>
      )
    })
  };

  const displayArr = (detailsArr) => {
    return detailsArr.map(el => {
      return displayObj(el, 1)
    });
  };

  const determineIfArrOrObj = (details) => {
    let detailsToDisplay;
    if (Array.isArray(details)) detailsToDisplay = displayArr(details);
    if (!Array.isArray(details)) detailsToDisplay = displayObj(details, 1);
    return detailsToDisplay;
  };

  return (
    <div className="Section">
      <div className="sectionHeading">
        <h3>{u.capsNoUnders(section[0])}</h3>
      </div>
      <div className="sectionDetails">
        {determineIfArrOrObj(section[1])}
      </div>
    </div>
  )

};

export default Section;