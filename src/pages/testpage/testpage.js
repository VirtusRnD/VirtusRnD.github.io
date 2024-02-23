import React from "react";
import ContentBlock from "../../components/ContentBlock/ContentBlock";
import virtusLogo from "./logo193.png";
const Testpage = () => {
  const data = {
    icon: virtusLogo, // Yeni bir ikonun yolu
    title: "Lorem mustafa",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    section: [
      {
        icon: virtusLogo, // Yeni bir servis ikonunun yolu
        title: "Service 1",
        content: "Description of service 1.",
      },
      {
        icon: virtusLogo, // Yeni bir servis ikonunun yolu
        title: "Service 2",
        content: "Description of service 2.",
      },
    ],
    button: [
      {
        color: "primary",
        title: "Learn More",
      },
      {
        color: "secondary",
        title: "Contact Us",
      },
    ],
    id: "content-block-id",
    direction: "right",
  };

  return (
    <div>
      <ContentBlock {...data} />
    </div>
  );
};

export default Testpage;
