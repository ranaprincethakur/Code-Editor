import React from "react";
import { Select } from "antd";

const Navbar = ({ handleLanguage, handleTheme }) => {
  // Filter `option.label` match the user type `input`
  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());
  return (
    <>
      <header>
        <div className="navbar">
          <div className="logo">
            <h1>Editor</h1>
          </div>
          <div className="drop-down">
            <Select
              showSearch
              className="Select"
              placeholder="Select a language"
              defaultValue={"html"}
              optionFilterProp="children"
              onChange={handleLanguage}
              filterOption={filterOption}
              options={[
                {
                  value: "html",
                  label: "HTML",
                },
                {
                  value: "css",
                  label: "CSS",
                },
                {
                  value: "javascript",
                  label: "JavaScript",
                },
                {
                  value: "text",
                  label: "Text",
                },
              ]}
            />
            <Select
              className="Select"
              defaultValue={"vs-dark"}
              optionFilterProp="children"
              onChange={handleTheme}
              options={[
                {
                  value: "vs-dark",
                  label: "DARK",
                },
                {
                  value: "light",
                  label: "LIGHT",
                },
              ]}
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
