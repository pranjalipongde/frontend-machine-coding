import React, { useState } from "react";

const ProfileForm = ({ setActiveTab }) => {
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (!age || isNaN(age)) {
      newErrors.age = "Age is required and must be numeric";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      newErrors.email = "Enter a valid email";
    }

    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      setActiveTab("Interest");
    }
  };

  return (
    <div>
      <form action="">
        <div>
          <label>Age: </label>

          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div>
          <label>Email:</label>

          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {error.email && <p className="error">{error.email}</p>}
        </div>

        <button type="button" className="next-btn" onClick={handleNext}>
          Next
        </button>
      </form>
    </div>
  );
};

export default ProfileForm;
