import React from "react";

const contactUs = () => {
  return (
    <React.Fragment>
      {/* <!-- Section: Contact v.1 --> */}
      <section className="my-5">
        {/* <!-- Section heading --> */}
        <h1 className="h1-responsive font-weight-bold text-center my-5">
          Contact us
        </h1>
        {/* <!-- Section description --> */}
        <p className="text-center w-responsive mx-auto pb-5 headContact">
          E-Commerce Website for vegetables, Fruits, Juice and many other
          products
          <label>Best Price For You Deal of the day</label>
        </p>

        {/* <!-- Grid row --> */}
        <div className="row">
          {/* <!-- Grid column --> */}
          <div className="col-lg-5 mb-lg-0 mb-4">
            {/* <!-- Form with header --> */}
            <div className="card">
              <div className="card-body">
                {/* <!-- Header --> */}
                <div className="form-header blue accent-1">
                  <h3 className="mt-2">
                    <i className="fas fa-envelope"></i> Write to us:
                  </h3>
                </div>
                <p className="dark-grey-text">
                  We'll write rarely, but only the best content.
                </p>
                {/* <!-- Body --> */}
                <div className="md-form">
                  <i className="fas fa-user prefix grey-text"></i>
                  <input
                    type="text"
                    id="form-name"
                    className="form-control ContInput"
                  />
                  <label htmlFor="form-name">Your name</label>
                </div>
                <div className="md-form">
                  <i className="fas fa-envelope prefix grey-text"></i>
                  <input
                    type="text"
                    id="form-email"
                    className="form-control ContInput"
                  />
                  <label htmlFor="form-email">Your email</label>
                </div>
                <div className="md-form">
                  <i className="fas fa-tag prefix grey-text"></i>
                  <input
                    type="text"
                    id="form-Subject"
                    className="form-control ContInput"
                  />
                  <label htmlFor="form-Subject">Subject</label>
                </div>
                <div className="md-form">
                  <i className="fas fa-pencil-alt prefix grey-text"></i>
                  <textarea
                    id="form-text"
                    className="form-control md-textarea"
                    rows="3"
                  ></textarea>
                  <label htmlFor="form-text">Send message</label>
                </div>
                <div className="text-center">
                  <button className="btn btn-primary">Submit</button>
                </div>
              </div>
            </div>
            {/* <!-- Form with header --> */}
          </div>
          {/* <!-- Grid column --> */}

          {/* <!-- Grid column --> */}
          <div className="col-lg-7 mapContain">
            {/* <!--Google map--> */}
            <div
              id="map-container-section"
              className="z-depth-1-half map-container-section mb-4"
              style={{ height: "400px" }}
            >
              <iframe
                id="iframe"
                src="https://maps.google.com/maps?q=Manhatan&t=&z=15&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                style={{ border: "0" }}
                allowFullScreen
              ></iframe>
            </div>
            {/* <!-- Buttons--> */}
            <div className="row text-center" style={{ paddingTop: "36px" }}>
              <div className="col-md-4">
                <a className="btn-floating blue accent-1">
                  <i className="fas fa-map-marker-alt"></i>
                </a>
                <p>Cairo, 94126</p>
                <p className="mb-md-0">Egypt</p>
              </div>
              <div className="col-md-4">
                <a className="btn-floating blue accent-1">
                  <i className="fas fa-phone"></i>
                </a>
                <p>+ 01 234 567 89</p>
                <p className="mb-md-0">Mon - Fri, 8:00-22:00</p>
              </div>
              <div className="col-md-4">
                <a className="btn-floating blue accent-1">
                  <i className="fas fa-envelope"></i>
                </a>
                <p>mahmoodmadel@gmail.com</p>
                <p className="mb-0">mahmood.adel54@yahoo.com</p>
              </div>
            </div>
          </div>
          {/* <!-- Grid column --> */}
        </div>
        {/* <!-- Grid row --> */}

        <div
          class="row"
          style={{
            marginTop: "42px",
            paddingLeft: "200px",
            paddingRight: "200px",
            backgroundColor: "white",
            paddingBottom: "15px",
          }}
        >
          <div
            className="col-md-12 text-center"
            style={{ backgroundColor: "white", marginTop: "30px" }}
          >
            <p>
              {" "}
              Link back to Colorlib can't be removed. Template is licensed under
              CC BY 3.0. Copyright &copy;
              <script>document.write(new Date().getFullYear());</script> All
              rights reserved | This template is made with{" "}
              <i className="icon-heart color-danger" aria-hidden="true"></i> by{" "}
              <a href="https://colorlib.com">Colorlib</a>
              Link back to Colorlib can't be removed. Template is licensed under
              CC BY 3.0.
            </p>
          </div>
        </div>
      </section>
      {/* <!-- Section: Contact v.1 --> */}
    </React.Fragment>
  );
};

export default contactUs;
