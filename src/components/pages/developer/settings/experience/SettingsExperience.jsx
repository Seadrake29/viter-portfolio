import React from "react";
import Header from "../../../../partials/Header";
import Navigation from "../../Navigation";
import BreadCrumbs from "../../../../partials/BreadCrumbs";
import Footer from "../../../../partials/Footer";
import { FaPlus } from "react-icons/fa";
import ModalAddSettingsExperience from "./ModalAddSettingsExperience";
import ExperienceListTable from "./ExperienceListTable";

const SettingsExperience = () => {
  const [isModalExperience, setIsModalExperience] = React.useState(false); //INITIAL VALUE

  const [itemEdit, setItemEdit] = React.useState(null);

  const handleAdd = () => {
    setItemEdit(null);
    setIsModalExperience(true);
  };

  return (
    <>
      <Header />
      <Navigation menu="settings" subMenu="experience" />
      <div className="wrapper bg-secondary">
        {/* BREADCRUMBS OR ADD BUTTON */}
        <div className="flex items-center justify-between">
          <BreadCrumbs />
          <button
            type="button"
            className="flex items-center gap-x-3 text-white hover:underline text-sm"
            onClick={handleAdd}
          >
            <FaPlus />
            <span>Add</span>
          </button>
        </div>

        {/* ADD CONTENT  */}
        <div className="pb-8">
          <h2 className="text-white mt-3">Experience</h2>
          <div className="pt-3">
            <ExperienceListTable
              setItemEdit={setItemEdit}
              setIsModal={setIsModalExperience}
            />
          </div>
        </div>

        {/* FOOTER */}
        <Footer />
      </div>

      {isModalExperience && (
        <ModalAddSettingsExperience
          itemEdit={itemEdit}
          setIsModal={setIsModalExperience}
        />
      )}
    </>
  );
};

export default SettingsExperience;
