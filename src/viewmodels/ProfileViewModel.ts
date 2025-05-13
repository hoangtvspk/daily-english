import { useState } from "react";
import { UserProfile } from "../types/common";
import { profileData } from "../data/profileData";

export const useProfileViewModel = () => {
  const [userProfile] = useState<UserProfile>(profileData);

  const handleLogout = () => {
    // TODO: Implement logout logic
    console.log("Logout pressed");
  };

  const handleSettingPress = (setting: string) => {
    // TODO: Implement setting navigation
    console.log("Setting pressed:", setting);
  };

  return {
    userProfile,
    handleLogout,
    handleSettingPress,
  };
};
