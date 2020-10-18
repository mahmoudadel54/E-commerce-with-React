import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <React.Fragment>
      <div id="home-section" className="hero">
        <div className="home-slider owl-carousel">
          <div className="slider-item">
            <div className="overlay"></div>
            <div className="container" style={{ width: "100%" }}>
              <div
                className="row slider-text justify-content-center align-items-center"
                data-scrollax-parent="true"
              >
                <h1 style={{ padding: "1%" }}>Vegefoods</h1>

                <div className="col-md-12 ftco-animate text-center homehead">
                  <h1 className="mb-2">
                    We serve Fresh Vegestables &amp; Fruits
                  </h1>
                  <h1 className="mb-2">100% Fresh &amp; Organic Foods</h1>
                  <br />
                  <h2 className="subheading mb-4">
                    We deliver organic vegetables &amp; fruits
                  </h2>
                  <p>
                    <Link to="/shop" className="btn btn-primary">
                      Shop Now
                    </Link>
                  </p>
                </div>

                <section id="section3">
                  <div className="container">
                    <h1 className="text-center"></h1>
                    <div className="row textSec3">
                      <h2 className="h1-responsive font-weight-bold my-5 whychooseus">
                        Our Services
                      </h2>
                      <div className="col-sm-6 col-sm-offset-3 sec3">
                        <p
                          className="text-center lead"
                          style={{ color: "white" }}
                        >
                          FreshDirect offers online produce delivery for
                          hundreds of different vegetables. We work directly
                          with farms to bring you fresh produce that's
                          unparalleled when it comes to quality, tastiness and
                          variety.
                        </p>
                        <p
                          className="text-center lead"
                          style={{ color: "white" }}
                        >
                          From your favorite go-to veggies to unique seasonal
                          items to organic, local, and pre-cut varieties, we
                          offer so many options for vegetable delivery and make
                          it easy to get nutritious choices on your plate.
                        </p>
                        <div className="row">
                          <div className="col-xs-6">
                            {" "}
                            And thanks to our expert ratings, you'll always know
                            what's best, in-season, and at the peak of freshness
                            right now.
                          </div>
                          <div className="col-xs-6 text-right"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center my-5 col">
        <div className="col"></div>
        <h2 className="h1-responsive font-weight-bold my-5 whychooseus">
          Why you choose Us?
        </h2>
        <p className="lead grey-text w-responsive mx-auto mb-5 paragraphWhyChoose">
          Vegefood offers online produce delivery for hundreds of different
          vegetables. We work directly with farms to bring you fresh produce
          that's unparalleled when it comes to quality, tastiness and variety.
        </p>
        <div className="row sec4">
          <div className="col-md-4">
            <i className="fas fa-chart-area fa-3x red-text"></i>
            <h5 className="font-weight-bold my-4">Analytics</h5>
            <p className="grey-text mb-md-0 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit maiores aperiam minima assumenda deleniti hic.
            </p>
          </div>

          <div className="col-md-4">
            <i className="fas fa-book fa-3x cyan-text"></i>
            <h5 className="font-weight-bold my-4">Tutorials</h5>
            <p className="grey-text mb-md-0 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit maiores aperiam minima assumenda deleniti hic.
            </p>
          </div>

          <div className="col-md-4">
            <i className="far fa-comments fa-3x orange-text"></i>
            <h5 className="font-weight-bold my-4">Support</h5>
            <p className="grey-text mb-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit maiores aperiam minima assumenda deleniti hic.
            </p>
          </div>
        </div>
      </div>

      <section id="section1" className="padding-bottom-0">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="row">
                <div className="col-sm-10 col-sm-offset-2 text-center">
                  <h3>Boom</h3>
                  <p>
                    There is other content and snippets of details or features
                    that can be placed here..
                  </p>
                  <i className="fa fa-cog fa-5x"></i>
                </div>
              </div>
            </div>
            <div className="col-sm-4 text-center">
              <div className="row">
                <div className="col-sm-10 col-sm-offset-1 text-center">
                  <h3>Boom</h3>
                  <p>
                    You may also want to create content that compells users to
                    scroll down more..
                  </p>
                  <i className="fa fa-bullseye fa-5x"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
      </section>
    </React.Fragment>
  );
};

export default Home;
