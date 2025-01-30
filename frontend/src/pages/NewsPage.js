import React, { useEffect, useState } from "react";
import NewsItem from "../components/news/NewsItem";

const NewsPage = (props) => {
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState([]);

  useEffect(() => {
    const loadNews = async () => {
      setLoading(true);
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/news`);
      const data = await response.json();
      setNews(data);
      setLoading(false);
    };
    loadNews();
  }, []);

  return (

    <section className="holder">
      {loading ? (
        <p>Loading...</p>
      ) : (
        news.map((item) => (
          <NewsItem
            key={item.id_news}
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
            body={item.body}
          />
        ))
      )}
    </section>
  );
};

export default NewsPage;
