import React from "react";
import "./Profile.css";
import { Carousel } from 'primereact/carousel';
import staff1 from './images/Staffs/keerthi.jpg';
import staff2 from './images/Staffs/beverly.jpg';
import staff3 from './images/Staffs/megan_jones.jpeg';
import staff4 from './images/Staffs/nonamewhds.jpg';
import staff5 from './images/Staffs/ashleigh.jpeg';
import staff6 from './images/Staffs/favour.jpeg';
import staff7 from './images/Staffs/poulter.jpeg';
import staff8 from './images/Staffs/metcalfe.jpg';
// import staff9 from './images/Staffs/keerthi.jpg';


const Profile = () => {
  const your_profile_details = [
    {
      id: 1,
      photo: staff1,
      name: "Keerthi Kumar Ujjini Basavaiah",
      occupation: "Principal Dentist",
      description:
        "Our clinic's Chief Medical Officer, Dr. Mark Hoffman has been working in this field of medical specialization since 2002. AColumbia medical school graduate, this",
    },
    {
      id: 2,
      photo: staff2,
      name: "Beverley Watson",
      occupation: "Practice Manageress",
      description:
        "Our clinic's Chief Medical Officer, Dr. Mark Hoffman has been working in this field of medical specialization since 2002. AColumbia medical school graduate, this",
    },
    {
      id: 3,
      photo: staff3,
      name: "Megan Jones",
      occupation: "Trainee Dental Nurse",
      description:
        "Our clinic's Chief Medical Officer, Dr. Mark Hoffman has been working in this field of medical specialization since 2002. AColumbia medical school graduate, this",
    },
    {
      id: 4,
      photo: staff4,
      name: "Samantha Cook",
      occupation: "Dental Nurse",
      description:
        "Our clinic's Chief Medical Officer, Dr. Mark Hoffman has been working in this field of medical specialization since 2002. AColumbia medical school graduate, this",
    },
    {
      id: 5,
      photo: staff4,
      name: "Alberta Marlene Da Cunha Ribeiro",
      occupation: "Dentist",
      description:
        "Our clinic's Chief Medical Officer, Dr. Mark Hoffman has been working in this field of medical specialization since 2002. AColumbia medical school graduate, this",
    },
    {
      id: 6,
      photo: staff5,
      name: "Ashleigh Rowell",
      occupation: "Dental Nurse",
      description:
        "Our clinic's Chief Medical Officer, Dr. Mark Hoffman has been working in this field of medical specialization since 2002. AColumbia medical school graduate, this",
    },
    {
      id: 7,
      photo: staff6,
      name: "Favour Nwokeji",
      occupation: "Trainee Dental Nurse",
      description:
        "Our clinic's Chief Medical Officer, Dr. Mark Hoffman has been working in this field of medical specialization since 2002. AColumbia medical school graduate, this",
    },
    {
      id: 8,
      photo: staff7,
      name: "Miss Frances Poulter (FD)",
      occupation: "Dentist",
      description:
        "Our clinic's Chief Medical Officer, Dr. Mark Hoffman has been working in this field of medical specialization since 2002. AColumbia medical school graduate, this",
    },{
      id: 9,
      photo: staff8,
      name: "Joanne Metcalfe",
      occupation: "Receptionist",
      description:
        "Our clinic's Chief Medical Officer, Dr. Mark Hoffman has been working in this field of medical specialization since 2002. AColumbia medical school graduate, this",
    },
  ];

  const responsiveOptions = [
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    }
];

  const itemTemplate = (profile) => {
    return (
      <div className="profile_details">
        <img src={profile.photo} alt="profile_image" className="profile_image" />
        <div className="profile_info">
          <h3 className="profile_name">{profile.name}</h3>
          <h4 className="profile_occupation">{profile.occupation}</h4>
        </div>
      </div>
    );
  };

  return (
    <>
      <section id="our-team">
      <div className="profile_section_container">
        <h2 className="services_header">
          <span>
            <i className="fa-solid fa-angles-right"></i>
          </span>
          Our Team
        </h2>
        <Carousel value={your_profile_details} itemTemplate={itemTemplate} numVisible={3} numScroll={1} responsiveOptions={responsiveOptions} autoplayInterval={3000} circular={true}/>
      </div>
      </section>
    </>
  );
};

export default Profile;
