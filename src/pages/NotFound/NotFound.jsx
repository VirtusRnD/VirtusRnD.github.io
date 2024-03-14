import React from 'react';
import { translate } from "../../components/Translation/Translation";
const NotFound = () => {
  

  const notfound = translate("notfound");
  const routemain = translate("routemain");
  return (
    <div className="not-found">
      <h1>{notfound}</h1>
      
      <a href="/">{routemain}</a>
    </div>
  );
};

export default NotFound;
