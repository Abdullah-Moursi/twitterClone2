import React from "react";
import {
  FaComment,
  FaHeart,
  FaLeaf,
  FaRegChartBar,
  FaRegCheckCircle,
} from "react-icons/fa";

const Posts = () => {
  return (
    <div className="postss">
      <div className="postss__first">
        <div className="posts__first__img">
          <img
            src="https://pbs.twimg.com/profile_images/1150716997254209536/M7gkjsv5_normal.jpg"
            alt="profile img"
          />
        </div>
        <div className="posts__first__name">
          <strong>BBC</strong> <FaRegCheckCircle className="verify" />
        </div>
        <div className="posts__first__username">
          @BBCNews <span>6m</span>
        </div>
      </div>
      <div className="postss__details">
        <div className="postss__details__msg">
          UK PM Boris Johnson and Chancellor Rishi Sunak will now self-isolate
          after Health Secretary Sajid Javid tested positive for Covid, after
          criticism for joining pilot daily testing scheme
        </div>
        <div className="postss__details__img">
          <img
            src="https://pbs.twimg.com/card_img/1415374535243743233/3VPghsy-?format=jpg&name=small"
            alt="post"
          />
        </div>
        <div className="reactions">
          <span>
            <FaComment className="re" />
            12
          </span>
          <span>
            <FaRegChartBar className="re" />
            52
          </span>
          <span>
            <FaHeart className="re" />2
          </span>
          <span>
            <FaLeaf className="re" />
            856
          </span>
        </div>
      </div>
    </div>
  );
};

export default Posts;
