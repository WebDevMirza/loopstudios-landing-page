import "../assets/styles/creations.css";
import DeepEarth from "../assets/images/desktop/image-deep-earth.jpg";
import DeepEarthMob from "../assets/images/mobile/image-deep-earth.jpg";

import NightArcade from "../assets/images/desktop/image-night-arcade.jpg";
import NightArcadeMob from "../assets/images/mobile/image-night-arcade.jpg";

import SoccerTeam from "../assets/images/desktop/image-soccer-team.jpg";
import SoccerTeamMob from "../assets/images/mobile/image-soccer-team.jpg";

import TheGrid from "../assets/images/desktop/image-grid.jpg";
import TheGridMob from "../assets/images/mobile/image-grid.jpg";

import FromUp from "../assets/images/desktop/image-from-above.jpg";
import FromUpMob from "../assets/images/mobile/image-from-above.jpg";

import PocketBor from "../assets/images/desktop/image-pocket-borealis.jpg";
import PocketBorMob from "../assets/images/mobile/image-pocket-borealis.jpg";

import TheCuriosity from "../assets/images/desktop/image-curiosity.jpg";
import TheCuriosityMob from "../assets/images/mobile/image-curiosity.jpg";

import MakeIt from "../assets/images/desktop/image-fisheye.jpg";
import MakeItMob from "../assets/images/mobile/image-fisheye.jpg";

const Creation = () => {
  const movieLink = [
    {
      imgDesktop: DeepEarth,
      imgMobile: DeepEarthMob,
      title: "Deep earth",
    },

    {
      imgDesktop: NightArcade,
      imgMobile: NightArcadeMob,
      title: "Night Arcade",
    },

    {
      imgDesktop: SoccerTeam,
      imgMobile: SoccerTeamMob,
      title: "Soccer Team VR",
    },

    {
      imgDesktop: TheGrid,
      imgMobile: TheGridMob,
      title: "The Grid",
    },

    {
      imgDesktop: FromUp,
      imgMobile: FromUpMob,
      title: "From Up above vr",
    },

    {
      imgDesktop: PocketBor,
      imgMobile: PocketBorMob,
      title: "Pocket Borealis",
    },

    {
      imgDesktop: TheCuriosity,
      imgMobile: TheCuriosityMob,
      title: "The Curiosity",
    },

    {
      imgDesktop: MakeIt,
      imgMobile: MakeItMob,
      title: "Make it Fisheye",
    },
  ];

  return (
    <>
      <section className="v-gap">
        <div className="wrapper">
          <div className="creation">
            <div className="creation-title">
              <h1>Our Creations</h1>
            </div>

            <div className="creation-card-holder">
              {movieLink.map((v, i) => {
                return (
                  <div key={i} className="card">
                    <div className="card-img">
                      <picture>
                        <source media="(min-width: 1024px)" srcSet={v.imgDesktop} />
                        <img src={v.imgMobile} alt={v.title} width="233" height="410" />
                      </picture>
                    </div>
                    <div className="card-title">
                      <p>{v.title}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="creation-seeall">
              <a href="#">SEE ALL</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Creation;
