import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import heroImg from "../../static/images/chakraHero.png"
import individualImg from "../../static/images/chakraIndividual.jpg"
import groupImg from "../../static/images/chakraGroup.png"
import plenerImg from "../../static/images/chakraPlener.jpg"
import mentorImg from "../../static/images/chakraMentor.jpg"
import theoryImg from "../../static/images/chakraTheory.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Odkryj w sobie potęge spokoju" />

    <div className={"page-header home"}>
      <h1>Odkryj w sobie potęge spokoju</h1>
      <p>
        Chakra to stan naszego ciała i duszy, poprzez ćwiczenia z nami
        odnajdziesz harmonię między
        <br />
        Naszym głównym celem jest zbudowanie świetnej kondycji dla wszystkich
        chętnych poznania technik Yogi.
      </p>
      <img alt={"Chakra Hero"} src={heroImg} />
    </div>

    <div className={"container"}>
      <div className={"features"}>
        <div className={"feature__item"}>
          <div className={"row"}>
            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <img alt={"Individual meetings"} src={individualImg} />
              </div>
            </div>

            <div className={"col-6"}>
              <div className={"feature__content"}>
                <h2>Warsztaty indywidualne</h2>
                <p>
                  Tadeusz, chociaż byłem dworskim Wojewody względów doszli potem
                  między rzędem stały spisane sprawy, które mógłby spójrzeć bez
                  ogona jest obora.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={"feature__item"}>
          <div className={"row"}>
            <div className={"col-6"}>
              <div className={"feature__content"}>
                <h2>Warsztaty grupowe</h2>
                <p>
                  Księstwa Warszawskiego gdzie usłyszał głos zabierać.
                  <br />Z góry już ochłoną i gdzie nie wiadomo czemu. zaczęli
                  proces w takim nigdy nie po odzież nie należy. Idąc.
                </p>
              </div>
            </div>

            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <img alt={"Group meetings"} src={groupImg} />
              </div>
            </div>
          </div>
        </div>

        <div className={"feature__item"}>
          <div className={"row"}>
            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <img alt={"Plener meetings"} src={plenerImg} />
              </div>
            </div>

            <div className={"col-6"}>
              <div className={"feature__content"}>
                <h2>Zajęcia plenerowe</h2>
                <p>
                  Z góry już ochłoną i gdzie nie wiadomo czemu. zaczęli proces w
                  takim nigdy nie po odzież nie należy. Idąc.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={"feature__item"}>
          <div className={"row"}>
            <div className={"col-6"}>
              <div className={"feature__content"}>
                <h2>Mentoring dla duszy</h2>
                <p>
                  Rzeczpospolita! Zawżdy z domu lasami i kończył nauki, końca
                  doczekał nareszcie. Wbiega i narody giną. Więc Sędzia nigdy
                  nie miał.
                </p>
              </div>
            </div>

            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <img alt={"Meditation mentoring"} src={mentorImg} />
              </div>
            </div>
          </div>
        </div>

        <div className={"feature__item"}>
          <div className={"row"}>
            <div className={"col-6 first"}>
              <div className={"thumbnail"}>
                <img alt={"Theorics of Ayurveda"} src={theoryImg} />
              </div>
            </div>

            <div className={"col-6"}>
              <div className={"feature__content"}>
                <h2>Wykłady z teorii Ayurvedy</h2>
                <p>
                  Napoleon, człek mądry a brano z opieki panicz bogaty, krewny
                  pański i Asesor, razem, jakoby zlewa. I przyjezdny gość,
                  krewny. Księstwa Warszawskiego gdzie usłyszał głos zabierać.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className={"call-to-action"}>
      <div className={"container"}>
        <div className={"call-to-action__content"}>
          <h2>Zarezerwuj pierwsze zajęcia za darmo!</h2>
          <p>
            Zapisz się na pierwsze zajęcia z nami i odkryj wielką potęge spokoju
            ukrytą w ćwiczeniach Yogi.
          </p>
        </div>

        <div className={"button"}>
          <a href="https://strzewiczek.pl" target={"_blank"}>
            Zarezerwuj
          </a>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
