import React from "react";
import { RichText } from "prismic-reactjs";

const BackgroundImageText = ({ slice }) => (
  <section className="full-width-image content-section">
    <div className="flex gap20">
      <div>
        <img
          src={slice.primary.card_background.url}
          alt={slice.primary.card_background.alt}
        />
        <RichText render={slice.primary.card_title.raw} />
      </div>
      <div>
        <img
          src={slice.primary.card_background.url}
          alt={slice.primary.card_background.alt}
        />
        <RichText render={slice.primary.card_title.raw} />
      </div>
    </div>
  </section>
);

export default BackgroundImageText;
