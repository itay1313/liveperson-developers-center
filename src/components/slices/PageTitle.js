import React from "react";
import { RichText } from "prismic-reactjs";

const PageTitle = ({ slice }) => (
  <h1 className="PageTitle">{RichText.asText(slice.primary.page_title.raw)}</h1>
);

export default PageTitle;
