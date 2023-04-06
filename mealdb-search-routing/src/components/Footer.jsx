import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div class="mt-96 text-center relative">
      <div class="absolute inset-x-0 bottom-0 h-16">
        <FontAwesomeIcon icon={faCopyright} className="me-2"></FontAwesomeIcon>
        2023 mealDB Inc. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
