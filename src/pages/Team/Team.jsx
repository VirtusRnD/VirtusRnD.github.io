import React from "react";
import "./Team.css";
import { translate } from "../../components/Translation/Translation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Team() {
  const teamMembers = [
    {id: 0,
      name: "Zeynep Filiz Eren",
      title: "Co-Founder",
      image: "zeynep.JPG",
      linkedin: "https://www.linkedin.com/in/zeynep-filiz-eren-3b8a5b256/?originalSubdomain=tr",
    },
    {
      id: 1,
      name: "Hasan Ali Özkan",
      title: "Co-Founder",
      image: "Ali.JPG",
      linkedin: "https://www.linkedin.com/in/hasanaliozkan",
    },
    {
      id: 2,
      name: "İbrahim Güler",
      title: "Flutter Developer",
      image: "İbrahim.JPG",
      linkedin: "https://www.linkedin.com/in/ibrahim-g%C3%BCler-087826269/",
    },
    {
      id: 3,
      name: "Ela Semra Sava",
      title: "Flutter Developer",
      image: "Ela.JPG",
      linkedin: "https://www.linkedin.com/in/elasemrasava/",
    },
    {
      id: 4,
      name: "Ali Zekai Deveci",
      title: "Backend Go Developer",
      image: "AliZ.JPG",
      linkedin: "https://www.linkedin.com/in/alizekaid/",
    },
    {
      id: 5,
      name: "Münib Akar",
      title: "Backend Go Developer",
      image: "Münib.JPG",
      linkedin: "https://www.linkedin.com/in/münibakar/",
    },
    {
      id: 6,
      name: "Hafize Sanlı",
      title: "React Developer & UI/UX Designer",
      image: "Hafize.JPG",
      linkedin: "https://www.linkedin.com/in/hafize-sanl%C4%B1-51101a280/",
    },
    {
      id: 7,
      name: "Emre Türkoğlu",
      title: "React Developer & UI/UX Designer",
      image: "Emre.JPG",
      linkedin: "https://www.linkedin.com/in/emre-t%C3%BCrko%C4%9Flu-53601b280/",
    },
    {
      id: 8,
      name: "Emir Turgut",
      title: "Data Engineer",
      image: "Emir.JPG",
      linkedin: "https://www.linkedin.com/in/emir-turgut/",
    },
  ];

  // Divide the teamMembers array into three rows
  const row1 = teamMembers.slice(0, 2);
  const row2 = teamMembers.slice(2, 6);
  const row3 = teamMembers.slice(6);

  return (
    <div className="team">
      <h2 className="team-title">{translate("team")}</h2>
      <div className="team-members-container">
        <div className="team-row">
          {row1.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
        <div className="team-row">
          {row2.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
        <div className="team-row">
          {row3.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TeamCard({ member }) {
  return (
    <div className="team-member-card">
      <img src={member.image} alt={member.name} className="member-image" />
      <h3 className="member-name">{member.name}</h3>
      <p className="member-title">{member.title}</p>
      {member.linkedin && (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-link"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      )}
    </div>
  );
}

export default Team;