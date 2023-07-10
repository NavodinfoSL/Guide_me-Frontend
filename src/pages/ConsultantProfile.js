import React, { useEffect , useState } from "react";
import { useCookies } from 'react-cookie';
import axios from 'axios';
import ProfileCard from "../components/profilecard";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { PersonalData,ProfileDescription } from "../data/consultantpersonaldata";
import { ExperienceData } from "../data/experiencedata";

const ConsultantProfile = () => {

  const [cookies, setCookie] = useCookies(['userId']);
  const [profileImage, setProfileImage] = useState(
    "/images/profileimages/initial_profile.png"
  );
  const [coverImage, setCoverImage] = useState(
    "/images/profileimages/initial_cover_image.PNG"
  );

  const [defaultExperience, setDefaultExperience] = useState([]);
  const [personalDetails,setPersonalDetails] = useState({})
  const isConsultent = true
  const Education = null
  const title = "Consultent"

  useEffect(() => {
   
    const userId = cookies.userId 
    axios
      .get(`http://127.0.0.1:8000/api/get_user_details/${userId}`)
      .then((response) => {
        // console.log(response.data.userimages.coverImage);

        if (
          response.data.userimages == null ||
          response.data.userimages.coverImage == null
        ) {
          console.log("images null");
          setCoverImage("/images/profileimages/initial_cover_image.PNG");
        } else {
          console.log("images not null");
          setCoverImage(
            "http://127.0.0.1:8000/uploads/" +
              response.data.userimages.coverImage
          );
        }

        if (
          response.data.userimages == null ||
          response.data.userimages.profileImage == null
        ) {
          setProfileImage("/images/profileimages/initial_profile.png");
        } else {
          setProfileImage(
            "http://127.0.0.1:8000/uploads/" +
              response.data.userimages.profileImage
          );
        }

        let temp_1 = response.data.experiences;
        setDefaultExperience([...temp_1]);
        
        if (response.data.userdetails != null) {
          setPersonalDetails(response.data.userdetails)
        }
      })
      .catch((error) => {
        console.log(error);
      });

  }, [])
  

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="pt-5">
        <ProfileCard PersonalData={PersonalData} ProfileDescription={ProfileDescription} ExperienceData={defaultExperience} isConsultent={isConsultent} Education={Education} profileImage={profileImage} coverImage={coverImage} personalDetails={personalDetails} title={title}/>
      </div>
      <div className="pt-5">
        <Footer />
      </div>
    </div>
  );
};

export default ConsultantProfile;
