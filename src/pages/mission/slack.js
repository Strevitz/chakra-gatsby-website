import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import SlackHiStaffImage from "../../../static/images/mission/chakraIcon.png"
import thumbnailEventWebhook from "../../../static/images/mission/chakraRoom.jpeg"
import thumbnailNewsWebhook from "../../../static/images/mission/chakraAula.jpg"
import thumbnailNoteWebhook from "../../../static/images/mission/chakraGarden.jpg"
import thumbnailGuid1 from "../../../static/images/mission/chakraContact.png"
import thumbnailGuid2 from "../../../static/images/mission/chakraStart.png"

const AboutPage = () => (
  <Layout>
    <SEO title="Slack Integration" />

    <div className={"page-header"}>
      <img src={SlackHiStaffImage} style={{ height: "9rem", width: "auto" }} />
      <h2>Nasza misja</h2>
      <p>
        Naszym głównym celem jest zbudowanie świetnej kondycji dla wszystkich
        chętnych poznania technik Yogi.
        <br />
        Chcemy również pogłębiać świadomość swoich potrzeb umysłu poprzez
        codzienne medytacje.
      </p>
    </div>

    <div className={"container"}>
      <div className={"features"}>
        <div className={"feature__item"}>
          <div className={"row"}>
            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <img alt={"Event"} src={thumbnailEventWebhook} />
              </div>
            </div>

            <div className={"col-6"}>
              <div className={"feature__content"}>
                <h2>Sala ćwiczeń</h2>
                <p>
                  Zajecia odbywają się w grupach do 6 osób w naszej przestronnej
                  sali ćwiczeń zaprojektowanej w barwach natury w duchu
                  feng-shui.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={"feature__item"}>
          <div className={"row"}>
            <div className={"col-6"}>
              <div className={"feature__content"}>
                <h2>Sala wykładowa</h2>
                <p>
                  Sala wykładowa mieści się na przeciw sali do ćwiczeń, posiada
                  wygodne miejsca nauki i kontemplacji dla każdego.
                </p>
              </div>
            </div>

            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <img alt={"Board"} src={thumbnailNewsWebhook} />
              </div>
            </div>
          </div>
        </div>

        <div className={"feature__item"}>
          <div className={"row"}>
            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <img alt={"News"} src={thumbnailNoteWebhook} />
              </div>
            </div>

            <div className={"col-6"}>
              <div className={"feature__content"}>
                <h2>Jesteśmy z Wami</h2>
                <p>
                  Zajęcia organizujemy również w plenerze, w naszym ogrodzie,
                  gdzie w okolicznościach pięknej natury możemy oddać się
                  ćwiczeniom.
                  <br />
                  <br />
                  Możemy również spotkać się z Wami w innym miescu, np. w
                  miejscu pracy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className={"bg-color"}>
      <div className={"container"}>
        <div className={"integration-guid"}>
          <div className={"title"}>
            <h2>Jak zacząć przygodę z Yogą i Ayurvedą?</h2>
          </div>

          <div className={"content"}>
            <h4>To proste!</h4>
            <p>
              Podkomorzemu ścisnął za domem urządzał wieczerzę. on może by stary
              stojący zegar kurantowy w dalekim mieści kończył nauki, końca
              doczekał nareszcie.
            </p>
            <h4>Krok 1</h4>
            <p>
              Skontaktuj się z nami i zapisz się na pierwsze zajęcia za darmo.
              Pomożemy wybrać dla Ciebie plan ćwiczeń, dietę oraz mentoring
              medytacyjny.
            </p>
            <img alt={"News"} src={thumbnailGuid1} />

            <h4>Krok 2</h4>
            <p>
              Ćwicz codziennie i medytuj zgodnie z naukami Ayurvedy. Ciesz się
              idealną kondycją fizyczną i spokojem wewnętrznym!
            </p>
            <img alt={"News"} src={thumbnailGuid2} />
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutPage
