import React from "react";

import {
  ProfileContainer,
  ProfileAvatar,
  ProfileBlobContainer,
  ProfileBody,
  ProfileHeading,
} from "./profile-header.styles";

import profileData from "./profile_data.json";

const ProfileSection = () => {
  const { image, title, subtitle, body } = profileData;

  return (
    <ProfileContainer>
      <ProfileAvatar src={image} />
      <ProfileBlobContainer>
        <ProfileHeading>{title}</ProfileHeading>
        <h3>{subtitle}</h3>
        <ProfileBody>{body}</ProfileBody>
      </ProfileBlobContainer>
    </ProfileContainer>
  );
};

export default ProfileSection;
