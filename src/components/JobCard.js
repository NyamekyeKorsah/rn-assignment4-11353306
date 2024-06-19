// Ensure React is imported only once at the beginning
import React from 'react';
import './HomeScreen.css'; // Import your CSS file for styling

const HomeScreen = ({ user }) => {
  // Example data for Featured Jobs and Popular Jobs
  const featuredJobs = [
    {
      jobTitle: 'Software Engineer',
      companyName: 'Facebook',
      salary: '$180,000',
      location: 'Accra, Ghana',
      logo: 'facebook-logo.png', // Replace with actual logo path
    },
    // Add more job objects as needed
  ];

  const popularJobs = [
    {
      jobTitle: 'Frontend Developer',
      companyName: 'Google',
      salary: '$150,000',
      location: 'Mountain View, CA',
      logo: 'google-logo.png', // Replace with actual logo path
    },
    // Add more job objects as needed
  ];

  return (
    <div className="home-container">
      {/* User Info and Search Bar */}
      <div className="header">
        <div className="user-info">
          <div className="user-details">
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
          <div className="user-profile">
            <img src={user.profilePicture} alt="Profile" />
          </div>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search a job or position" />
          <button>Search</button>
        </div>
      </div>

      {/* Featured Jobs Section */}
      <div className="featured-jobs">
        <h2>Featured Jobs</h2>
        <div className="job-cards">
          {featuredJobs.map((job, index) => (
            <div className="job-card" key={index}>
              <div className="logo">
                <img src={job.logo} alt={job.companyName} />
              </div>
              <div className="job-details">
                <div className="job-title">
                  <img src="/icons/facebook-icon.svg" alt="Facebook" /> {/* Facebook icon */}
                  <h3>{job.jobTitle}</h3>
                </div>
                <p>{job.companyName}</p>
                <div className="job-footer">
                  <p>{job.salary}</p>
                  <p>{job.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="see-all">See all</p>
      </div>

      {/* Popular Jobs Section */}
      <div className="popular-jobs">
        <h2>Popular Jobs</h2>
        <div className="job-cards">
          {popularJobs.map((job, index) => (
            <div className="job-card" key={index}>
              <div className="logo">
                <img src={job.logo} alt={job.companyName} />
              </div>
              <div className="job-details">
                <h3>{job.jobTitle}</h3>
                <p>{job.companyName}</p>
                <div className="job-footer">
                  <p>{job.salary}</p>
                  <p>{job.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="see-all">See all</p>
      </div>
    </div>
  );
};

export default HomeScreen;
