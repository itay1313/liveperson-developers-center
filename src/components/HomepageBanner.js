import React from "react";
import { Link } from "gatsby";
import { RichText } from "prismic-reactjs";

const HomepageBanner = ({ bannerContent }) => (
  <section className="homepage-section">
    <h1 className="banner-title">{RichText.asText(bannerContent.title.raw)}</h1>
    <p className="banner-description">
      {RichText.asText(bannerContent.description.raw)}
    </p>
    <div className="card-container flex justify-between flex-wrap gap20">
      <Link
        to={bannerContent.link.url}
        className="homepage-banner-url flex column justify-center align-center"
      >
        <div
          className="homepage-banner flex"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(15, 9, 67, 0.88) 0%, rgba(41, 39, 64, 0.8) 100%), url(${bannerContent.background.url})`,
          }}
        >
          <div className="banner-content container">
            <p className="banner-description">
              {RichText.asText(bannerContent.description.raw)}
            </p>
            {/* <Link to={bannerContent.link.url} className="banner-button">
              {RichText.asText(bannerContent.linkLabel.raw)}
            </Link> */}
          </div>
        </div>
      </Link>
      <Link
        to={bannerContent.link.url}
        className="homepage-banner-url flex column justify-center align-center"
      >
        <div
          className="homepage-banner flex"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(15, 9, 67, 0.88) 0%, rgba(41, 39, 64, 0.8) 100%), url(${bannerContent.background.url})`,
          }}
        >
          <div className="banner-content container">
            <p className="banner-description">
              {RichText.asText(bannerContent.description.raw)}
            </p>
            {/* <Link to={bannerContent.link.url} className="banner-button">
              {RichText.asText(bannerContent.linkLabel.raw)}
            </Link> */}
          </div>
        </div>
      </Link>
    </div>
  </section>
);

export default HomepageBanner;
