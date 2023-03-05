import ShowOffIMG from "../assets/images/desktop/image-interactive.jpg";
import ShowOffImgMobile from "../assets/images/mobile/image-interactive.jpg";
import "../assets/styles/showoff.css";

const ShowOff = () => {
  return (
    <>
      <section className="v-gap">
        <div className="wrapper">
          <div className="showoff">
            <div className="showoff-img">
              <picture>
                <source media="(min-width: 1024px)" srcSet={ShowOffIMG} />
                <img src={ShowOffImgMobile} alt="Show off image" />
              </picture>
            </div>
            <div className="showoff-body">
              <h1 className="showoff-title">The leader in interactive VR</h1>
              <p className="showoff-text">
                Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the
                best companies around the globe. Our award-winning creations have transformed businesses through digital
                experiences that bind to their brand.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ShowOff;
