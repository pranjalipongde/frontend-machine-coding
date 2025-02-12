import { useState } from "react";

function SettingsForm() {
  const [notification, setNotification] = useState("None");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form Submitted!\nNotification Preference: ${notification}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Notification Preferences:</label>
        <div className="radio-button">
          <input
            type="radio"
            value="Email"
            checked={notification === "Email"}
            onChange={(e) => setNotification(e.target.value)}
          />
          <label>Email</label>

          <input
            type="radio"
            value="SMS"
            checked={notification === "SMS"}
            onChange={(e) => setNotification(e.target.value)}
          />
          <label>SMS</label>

          <input
            type="radio"
            value="None"
            checked={notification === "None"}
            onChange={(e) => setNotification(e.target.value)}
          />
          <label>None</label>
        </div>
      </div>

      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  );
}

export default SettingsForm;
