import React from "react";
import "../../styles/components/layout/NewsItem.css";

const NewsItem = (props) => {
  const { title, subtitle, image, body } = props;

  return (
    <div className="news">
        <div className="title-container">
            <div>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
            </div>
            <img src={image} alt={title} className="image"/>
        </div>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  );
};

export default NewsItem;
