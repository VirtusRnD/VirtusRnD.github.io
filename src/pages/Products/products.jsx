import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./products.css";
import { useTranslation } from "react-i18next";


function Products() {

  const { t } = useTranslation();

  
  const [activeIndex, setActiveIndex] = useState(0);
  const middleRectangleWidth = 700;
  const middleRectangleHeight = 700;

  const title1 = t("title1");
  const title2 = t("title2");
  const title3 = t("title3");
  const title4 = t("title4");

 
  const rectangles = [
    { id: 1, width: 500, height: 500, backgroundColor: "burlywood", title: title1, color: "blue", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", image: "/Cat0.jpg" },
    { id: 2, width: 500, height: 500, backgroundColor: "rgb(81, 83, 115)", title: title2, color: "blue", content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicer", image: "/cat1.png" },
    { id: 3, width: 500, height: 500, backgroundColor: "green", title: title3, color: "blue", content: ", written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. ", image: "/Cat0.jpg" },
    { id: 4, width: 500, height: 500, backgroundColor: "green", title: title4, color: "blue", content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful " , image: "/cat1.png" },
    // Daha fazla rectangle
  ];

 
  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === rectangles.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? rectangles.length - 1 : prevIndex - 1));
  };

return (
  <div className="container">
   
    {[activeIndex, (activeIndex + 1) % rectangles.length, (activeIndex + 2) % rectangles.length].map((index, i) => (
      <div key={rectangles[index].id} className="rectangle" style={{ width: i === 1 ? middleRectangleWidth : rectangles[index].width, height: i === 1 ? middleRectangleHeight : rectangles[index].height, backgroundColor: rectangles[index].backgroundColor }}>
        <div className="image-container">
        <img src={window.location.origin + rectangles[index].image} alt="landing" className="image" />

        </div>
        <div className="content">
          <h2 style={{ color: rectangles[index].color }}>{rectangles[index].title}</h2>
          <p>{rectangles[index].content}</p>
        </div>
      </div>
    ))}
    
    <button className="left-arrow-button" onClick={goToPrevious}><FontAwesomeIcon icon={faArrowLeft} /></button>
    <button className="right-arrow-button" onClick={goToNext}><FontAwesomeIcon icon={faArrowRight} /></button>
  </div>
);

}

export default Products;
