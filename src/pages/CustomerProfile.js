import React, { useEffect , useState } from "react";
import { useCookies } from 'react-cookie';
import axios from 'axios';
import ProfileCard from "../components/profilecard";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { CustomerPersonalData,CustomerProfileDescription } from "../data/customerpersonaldata";
import { CustomerExperienceData } from "../data/customerexperiencedata";
import { Education } from "../data/customereducation";

const CustomerProfile = () => {

  const [cookies, setCookie] = useCookies(['userId']);
  const [profileImage, setProfileImage] = useState(
    "/images/profileimages/initial_profile.png"
  );
  const [coverImage, setCoverImage] = useState(
    "/images/profileimages/initial_cover_image.PNG"
  );

  const [defaultExperience, setDefaultExperience] = useState([]);
  const [defaultEducation, setDefaultEducation] = useState([]);
  const [personalDetails,setPersonalDetails] = useState({})
  const isConsultent = false
  const Education = null
  const title = "Customer"

  useEffect(() => {
   
    const userId = cookies.userId 
    axios
      .get(`http://127.0.0.1:8000/api/get_user_details/${userId}`)
      .then((response) => {

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
        let temp_2 = response.data.educations;
        setDefaultExperience([...temp_1]);
        setDefaultEducation([...temp_2]);
        
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
      <ProfileCard PersonalData={CustomerPersonalData} ProfileDescription={CustomerProfileDescription} ExperienceData={defaultExperience} isConsultent={isConsultent} Education={defaultEducation} profileImage={profileImage} coverImage={coverImage} personalDetails={personalDetails} title={title}/>
    </div>
    <div className="pt-5">
      <Footer />
    </div>
  </div>
  )
}

export default CustomerProfile
