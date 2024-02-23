import React from "react";
import Slider from "../../components/Slider/Slider";
import data from "../../components/Slider/data";
import "../../styles.css";

function Products2() {
    return <div>Products2

        <Slider data={data} activeSlide={2} />
    </div>;
    }
export default Products2;