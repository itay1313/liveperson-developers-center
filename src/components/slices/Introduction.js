import React from "react";
import { RichText } from "prismic-reactjs";

const Introduction = ({ slice }) => (
  <section className="content-section quote">
    <blockquote>
      LivePerson Functions is now enabled on your account. Log in at
      https://faas.liveperson.net or click on the Functions link from your
      Conversational Cloud Quick Launch menu
    </blockquote>
    {/* <blockquote>{RichText.asText(slice.primary.intro.raw)}</blockquote> */}
  </section>
);

export default Introduction;
