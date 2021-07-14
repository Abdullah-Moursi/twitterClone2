import React from "react";
import {
  FaCalendarCheck,
  FaListAlt,
  FaRegImage,
  FaRegSmile,
} from "react-icons/fa";

const CreateTweet = () => {
  return (
    <div className="create">
      <div className="create__first">
        <div className="create__img">
          <img
            src="https://pbs.twimg.com/profile_images/1411679548958253056/aNi4geZs_normal.jpg"
            alt="ava"
          />
        </div>
        <div className="create__input">
          <input
            type="text"
            className="create__control"
            placeholder="What's happening?"
          />
        </div>
      </div>
      <div className="create__second">
        <div className="create__icons">
          <FaRegImage className="ic" />
          <FaListAlt className="ic" />
          <FaRegSmile className="ic" />

          <FaCalendarCheck className="ic" />
        </div>
        <div className="create__btn">
            <a href="">Tweet</a>
        </div>
      </div>
    </div>
  );
};

export default CreateTweet;
