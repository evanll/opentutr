import React from "react";

export function calculateReviewStars(totalrating) {
    if (totalrating === undefined) {
      totalrating = 0;
    }
    const stars = Math.round(totalrating);
    // apply allows to provide arguments as an array
    var highlighterStars = Array(stars).fill().map((e, i) => (
      <i className = "fas fa-star" key={i}></i>
    ));

    var greyStars = Array(5 - stars).fill().map((e, i) => (
      <i className = "far fa-star" key={i}></i>
    ));

    return highlighterStars.concat(greyStars);
  }
