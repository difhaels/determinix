import React, { useEffect, useState } from "react";
import "../css/output.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageTitle from "../elements/PageTilte";
import CardArticles from "../elements/CardArticles";

import { articles } from "../test/constant";

export default function Articles() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div>
      <div className="navbar">
        <Navbar isScrolled={isScrolled} />
      </div>
      <div className="bg-gradient-to-b from-yellow-300 to-white">
        <PageTitle what={"Articles"} />
        <div className="flex justify-center pt-10 gap-3 flex-wrap">
          {articles.map((article) => (
            <CardArticles
              key={article.id}
              id={article.id}
              writer={article.writer}
              date={article.date}
              title={article.title}
              type={article.type}
              short={article.short}
              img={article.img}
              full={true}
            />
          ))}
        </div>
      </div>
      <div className="footer pt-16">
        <Footer fix={false} />
      </div>
    </div>
  );
}
