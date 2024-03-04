import React from "react";
import ContentBlock from "../../components/ContentBlock/ContentBlock";
import virtusLogo from "./virtus-logo_cmyk.svg";
import { useTranslation } from "react-i18next";

const Testpage = () => {
  const { t } = useTranslation();

  const data = {
    icon: virtusLogo,
    title: t("production_web_title"),
    content: t("production_web_content"),
    id: "content-block-id",
    direction: "right",
  };
  const data2 = {
    icon: "/graphs.svg",
    title: t("production_mobile_title"),
    content: t("production_mobile_content"),
    id: "content-block-id",
    direction: "left",
  };
  const data3 = {
    icon: "/graphs.svg",
    title: t("production_data_title"),
    content: t("production_data_content"),
    id: "content-block-id",
    direction: "right",
  };
  const data4 = {
    icon: "/graphs.svg",
    title: t("production_digitale_title"),
    content: t("production_digitale_content"),
    id: "content-block-id",
    direction: "left",
  };

  return (
    <div>
      <ContentBlock {...data} />
      <ContentBlock {...data2} />
      <ContentBlock {...data3} />
      <ContentBlock {...data4} />
    </div>
  );
};

export default Testpage;
