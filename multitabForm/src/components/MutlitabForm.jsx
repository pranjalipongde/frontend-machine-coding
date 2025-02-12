import React, { useState } from "react";
import ProfileForm from "./ProfileForm";
import InterestForm from "./InterestForm";
import SettingForm from "./SettingForm";

const MutlitabForm = () => {
  const [activeTab, setActiveTab] = useState("Profile");

  return (
    <div className="container">
      <h1>Multi tab Form</h1>

      <div className="tabs">
        <button
          className={activeTab === "Profile" ? "active" : ""}
          onClick={() => setActiveTab("Profile")}
        >
          Profile
        </button>

        <button
          className={activeTab === "Interest" ? "active" : ""}
          onClick={() => setActiveTab("Interest")}
        >
          Interest
        </button>

        <button
          className={activeTab === "Settings" ? "active" : ""}
          onClick={() => setActiveTab("Settings")}
        >
          Settings
        </button>
      </div>

      {activeTab === "Profile" && <ProfileForm setActiveTab={setActiveTab} />}
      {activeTab === "Interest" && <InterestForm setActiveTab={setActiveTab} />}
      {activeTab === "Settings" && <SettingForm />}
    </div>
  );
};

export default MutlitabForm;
