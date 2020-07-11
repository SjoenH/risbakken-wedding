import React, { Component } from "react";
import moment from "moment";
import PropTypes from "prop-types";

export default class CountDown extends Component {
  propTypes = {
    date: PropTypes.object.isRequired,
    style: PropTypes.object,
    before: PropTypes.string,
    on_the_day: PropTypes.string,
    after: PropTypes.string,
  };

  defaultProps = {
    style: {},
    before: "Is getting married",
    on_the_day: "Today's the day!",
    after: "Have been married for ",
  };

  render() {
    const { date, style, before, on_the_day, after } = this.props;

    function dateText() {
      const is_today = moment(date).isSame(moment.now(), "day");
      if (is_today) {
        return on_the_day;
      }

      let in_the_future = moment(date).isAfter(moment.now());
      if (in_the_future) {
        return `${before} in ${moment(date).toNow(true)}`;
      }

      return `${after} ${moment(date).toNow(true)}`;
    }

    return <h1 style={style}>{dateText()}</h1>;
  }
}
