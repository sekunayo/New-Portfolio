import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";
import profile from "../../images/grace.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home-box">
        <div className="home-box-inner">
          <div className="home-image">
            <img src={profile} alt="profile"></img>
          </div>
          <h1 className="home-heading">Hi,I'm Grace</h1>
          <p className="home-text">
            A frontend developer and associate product manager, who loves
            building responsive, interactive interfaces with build tools such as
            ReactJs, SASS, BootStrap, etc, and UX tools like journey maps, user
            flows, storyboards, sitemaps, personas, etc. Contact me if you would
            like to know more about my works.
          </p>
          <div className="home-button-container">
            <Button children="contact me ☎" buttonStyle="button button-black" />
            <Link to="/works" className="nav-link">
              <Button
                children="my works 💅"
                buttonStyle="button button-peach"
              />
            </Link>
          </div>
        </div>
        <div className="absolute-svg">
          <svg
            width="284"
            height="281"
            viewBox="0 0 284 281"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M283 121L283 201H203L283 121Z" fill="#FF6B6B" />
            <path d="M80 240L80 200H121L80 240Z" fill="#292F36" />
            <path d="M121 241L121 201H161L121 241Z" fill="#FF6B6B" />
            <path d="M243 120L243 80H283L243 120Z" fill="#FF6B6B" />
            <path d="M80 281L80 241H121L80 281Z" fill="#FF6B6B" />
            <path d="M202 161L202 121H243L202 161Z" fill="#FF6B6B" />
            <path d="M80 200L80 159H121L80 200Z" fill="#FF6B6B" />
            <path d="M163 120L163 80H203L163 120Z" fill="#FF6B6B" />
            <path d="M243 40L243 0H283L243 40Z" fill="#FF6B6B" />
            <path d="M243 80L243 40H283L243 80Z" fill="#292F36" />
            <path d="M203 120L203 80H243L203 120Z" fill="#292F36" />
            <path d="M163 161L163 121H203L163 161Z" fill="#292F36" />
            <path d="M122 161L122 121H162L122 161Z" fill="#FF6B6B" />
            <path d="M203 80L203 40H243L203 80Z" fill="#FF6B6B" />
            <path d="M121 200L121 160H161L121 200Z" fill="#292F36" />
            <path d="M161 201L161 161H202L161 201Z" fill="#FF6B6B" />
            <path d="M40 240L40 200H80L40 240Z" fill="#FF6B6B" />
            <path d="M0 280L1.52588e-05 240H40L0 280Z" fill="#FF6B6B" />
            <path d="M243 241L283 241V201L243 241Z" fill="#292F36" />
            <path d="M40 280L40 240H80L40 280Z" fill="#292F36" />
            <path d="M203 281L244 281V240L203 281Z" fill="#292F36" />
            <path d="M203 241L243 241V201L203 241Z" fill="#292F36" />
            <path d="M203 201L203 281H123L203 201Z" fill="#FF6B6B" />
            <circle cx="264" cy="261" r="20" fill="#FF6B6B" />
            <circle
              cx="203.799"
              cy="179.196"
              r="14"
              transform="rotate(-45 203.799 179.196)"
              fill="#292F36"
            />
            <circle
              cx="223.598"
              cy="159.397"
              r="14"
              transform="rotate(-45 223.598 159.397)"
              fill="#292F36"
            />
            <circle
              cx="243.397"
              cy="139.598"
              r="14"
              transform="rotate(-45 243.397 139.598)"
              fill="#292F36"
            />
            <circle
              cx="263.196"
              cy="119.799"
              r="14"
              transform="rotate(-45 263.196 119.799)"
              fill="#292F36"
            />
            <circle
              cx="124.799"
              cy="258.196"
              r="14"
              transform="rotate(-45 124.799 258.196)"
              fill="#292F36"
            />
            <circle
              cx="144.598"
              cy="238.397"
              r="14"
              transform="rotate(-45 144.598 238.397)"
              fill="#292F36"
            />
            <circle
              cx="164.397"
              cy="218.598"
              r="14"
              transform="rotate(-45 164.397 218.598)"
              fill="#292F36"
            />
            <circle
              cx="184.196"
              cy="198.799"
              r="14"
              transform="rotate(-45 184.196 198.799)"
              fill="#292F36"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Home;
