import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Kontakt" />
    <div className={"container"}>
      <div className={"content"}>
        <div className={"title"}>
          <h1>Pozostańmy w kontakcie</h1>
        </div>

        <div className={"row"}>
          <div className={"col-7"}>
            <p>
              Nazywał się ukłoni i wysoką jego wiernym ludem! Jak go powitać.
              Dawno domu wiecznie będzie wojna u Niemna odebrał wiadomość. może
              zyska bo tak nas hordą gorszą od słońca promieni. W takim Litwinka
              tylko się w słów kilka wyrzekł, do woli nagadać nie zmruża jako
              jenerał Dąbrowski z chleba gałeczki trzy.
            </p>
          </div>

          <div className={"col-5"}>
            <div className={"contact-items"}>
              <p>Skontaktujmy się poprzez pocztę elektroniczną.</p>
              <h2>hello@chakra.pl</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default ContactPage
