import React, { useState } from "react";

const InterestForm = ({ setActiveTab }) => {
  const [interest, setInterest] = useState("");
  const [subsribe, setSubsribe] = useState(false);
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!interest) {
      setError("Please select an interest");
    } else {
      setError("");
      setActiveTab("Settings");
    }
  };

  return (
    <form>
      <div className="select-option">
        <label>Select Interest:</label>
        <div>
          <select
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
          >
            <option value="">Select...</option>
            <option value="Technology">Technology</option>
            <option value="Design">Design</option>
            <option value="Marketing">Marketing</option>
          </select>
        </div>
        {error && <p className="error">{error}</p>}
      </div>

      <div>
        <input
          type="checkbox"
          checked={subsribe}
          onChange={(e) => setSubsribe(e.target.checked)}
        />
        <label>Subscribe to Newsletter</label>
      </div>

      <button type="button" className="next-btn" onClick={handleNext}>
        Next
      </button>
    </form>
  );
};

export default InterestForm;
