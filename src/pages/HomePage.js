/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Navbar from "../components/navbar";
import "./HomePage.css";
// import * as RiIcons from "react-icons/ri";
// import * as IoIcons from "react-icons/io";
import { HomePageData } from "../data/homepagedata";
import HomePageCard from "../components/homepagecard";
import { HomePageSeconCardData } from "../data/homepageseconcarddata";
import HomePageSeconCard from "../components/homepageseconcard";
import CountryDataCard from "../components/countrydatacard";
import { CountryData } from "../data/countrydata";
import BlogDataCard from "../components/blogdatacard";
import { BlogData } from "../data/blogsdata";
import Footer from "../components/footer";

const HomePage = () => {
  return (
    <div className="flex-container">
      <Navbar />
      <div
        style={{
          backgroundImage: `url("./images/homepageimages/homepage.png")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "92.7vh",
        }}
      >
        <div className="transparent-bg">
          <div className="content">
            <p>World Most Trusted</p>
            <span>Traveling Consultancy Service</span>
          </div>
        </div>
        <button className="bookConsultation position-relative">
          Book a Consultation
        </button>
      </div>

      <div className="second-part">
        <div className="row pt-5 pb-5 mx-auto">
          {HomePageData.map((item) => (
            <div className="col d-flex justify-content-center" key={item.id}>
              <HomePageCard item={item} />
            </div>
          ))}
        </div>

        <div className="explore">
          <div class="d-flex justify-content-center">
            <h3>Don't Hesitate Contact Us For Better Help And Services.</h3>
          </div>
          <div class="d-flex justify-content-center">
            <h4>
              <a href="#">Explore of Categories</a>
            </h4>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="aboutguideme">
              <div className="first px-5 list-group">
                <li className="guideme">
                  <div>
                    <h4>About GuideME</h4>
                    <p className="w-50 font-monospace">
                      Foundation was established with a small idea that was
                      incepted in the minds of its promoters in the year 2022.
                      Whether you're interested in traveling to a new city,
                      flying for business, traveling for studies - we're
                      committed to guide our customers to any country they
                      aspire to settle.
                    </p>
                  </div>
                </li>
                <li className="accurate">
                  <div className="d-flex flex-row">
                    <div>
                      <img src="/images/homepageimages/guidance.png" alt=""/>
                    </div>
                    <div className="px-5">
                      <h5>Accurate Guidance</h5>
                      <p>
                        Skilled professionals are always ready to provide
                        reliable service to our clients!
                      </p>
                    </div>
                  </div>
                </li>
                <li className="anywhere">
                  <div className="d-flex flex-row">
                    <div>
                      <img src="./images/homepageimages/internet.png" alt=""/>
                    </div>
                    <div className="px-5">
                      <h5>Anywhere in the world!</h5>
                      <p>
                        No matter where you are in the world, we are just one
                        tap away!
                      </p>
                    </div>
                  </div>
                </li>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="img1">
              <img src="./images/homepageimages/img1.png" alt=""/>
            </div>
          </div>
        </div>
      </div>

      <div className="third-part">
        <div
          style={{
            backgroundImage: `url("./images/homepageimages/ship.jpg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "100%",
          }}
        >
          <div className="second-transparent-bg">
            <div className="pt-5">
              <h5 class="text-center fs-5 fw-normal">What We Do</h5>
              <h4 class="text-center fs-3">Our Experts Create Great</h4>
              <h4 class="text-center fs-3">
                Values For All Your Traveling Needs
              </h4>
            </div>

            <div className="row pt-4 pb-5 mx-auto">
              {HomePageSeconCardData.map((item) => (
                <div
                  className="col d-flex justify-content-center"
                  key={item.id}
                >
                  <HomePageSeconCard item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="forth-part">
        <div className="pt-5">
          <h5 class="text-center fs-5 fw-normal text-uppercase">
            Favorite designation
          </h5>
          <h4 class="text-center fs-3">For the immigration,</h4>
          <h4 class="text-center fs-3">
            Choose your <b>Country!</b>
          </h4>
        </div>

        <div className="row pt-4 pb-5 mx-auto">
          {CountryData.map((item) => (
            <div className="col d-flex justify-content-center" key={item.id}>
              <CountryDataCard item={item} />
            </div>
          ))}
        </div>
        <div className="pt-3 pb-3">
          <h5 class="text-center fs-5 fw-bold">
            Would you like to connect with a consultant?{" "}
            <small>
              <a href="#" style={{ textDecoration: "none" }}>
                Explore All Country
              </a>
            </small>
          </h5>
        </div>
      </div>

      <div className="fifth-part mb-5">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="d-flex justify-content-end pt-5">
              <img
                src="./images/homepageimages/fifth-part-images/fifth.jpg"
                className="first-colomn-img"
                alt=""
              />
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="second-colomn-main">
              <div className="second-colomn">
                <div>
                  <h5 class="text-center fw-normal text-uppercase testimonials">
                    testimonials
                  </h5>
                  <h4 class="text-center Client">
                    What Our <b>Client Says</b>
                  </h4>
                </div>

                <div className="inner-part mx-auto">
                  <p>
                    I really would like to appreciate GuideME and the entire
                    team, especially consultant Ms. Anne Perera for helping me
                    get my students visa for the Brunel University. She helped
                    me all the way to find the University & right course. She
                    was there for me through the entire process.
                  </p>

                  <img
                    src="./images/homepageimages/fifth-part-images/profile.png"
                    className="mx-auto d-block profile"
                    alt=""
                  />

                  <h4 class="text-center fw-normal">
                    <b>Anne Marie</b>
                  </h4>
                  <h5 class="text-center">Customer</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sixth-part p-5">
        <div className="row">
          <div className="col">
            <div className="text-uppercase our-latest-blogs">
              our latest blogs
            </div>
            <div className="our-work-business">
              Our Work Business <b>Innovations!</b>
            </div>
          </div>

          <div className="col d-flex justify-content-end">
            <button className="news-button">View More News</button>
          </div>
        </div>

        <div className="sixth-part-cards">
          <div className="row xs={1} md={2} lg={3} pt-4 pb-5 mx-auto">
            {BlogData.map((item) => (
              <div className="col d-flex justify-content-center" key={item.id}>
                <BlogDataCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>


      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default HomePage;
