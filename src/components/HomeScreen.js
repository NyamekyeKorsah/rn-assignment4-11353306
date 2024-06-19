import React from 'react';
import './HomeScreen.css'; // Import your CSS file
import facebookLogo from '../assets/facebook.png'; // Replace with actual path to Facebook logo

const HomeScreen = ({ user }) => {
  return (
    <div className="home-container">
      <header className="header">
        <div className="user-info">
          <div className="name">{user.name}</div>
          <div className="gmail">{user.email}</div>
        </div>
        <div className="user-profile">
          <img src={user.profilePicture} alt="Profile" className="profile-picture" />
        </div>
      </header>

      <div className="search-bar">
        <input type="text" placeholder="Search a job or position!" />
        <button>Search</button>
      </div>

      <section className="featured-jobs-section">
        <h2>Featured Jobs</h2>
        <div className="job-card">
          <img src={facebookLogo} alt="Facebook Logo" className="job-logo" />
          <div className="job-details">
            <div className="job-title">Software Engineer</div>
            <div className="company-name">Facebook</div>
            <div className="job-footer">
              <div className="salary">$180,000</div>
              <div className="location">Accra, Ghana</div>
            </div>
          </div>
        </div>
        <div className="see-all">See all</div>
      </section>

      <section className="popular-jobs-section">
        <h2>Popular Jobs</h2>
        {/* Placeholder for popular jobs */}
        <div className="job-card placeholder">
          <div className="logo-placeholder">P</div>
          <div className="job-details">
            <div className="job-title">Placeholder Job</div>
            <div className="company-name">Company</div>
            <div className="job-footer">
              <div className="salary">$100,000</div>
              <div className="location">Anywhere</div>
            </div>
          </div>
        </div>
        <div className="see-all">See all</div>
      </section>
    </div>
  );
};

export default HomeScreen;
