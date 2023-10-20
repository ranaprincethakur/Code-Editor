import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { toast } from "react-toastify";
import FileSaver from "file-saver";

const CodeEditorWindow = ({ language, theme }) => {
  const [text, setText] = useState("//code here");
  const [isLocked, setIsLocked] = useState(false);

  //for copy button
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to Clipboard!", "success");
  };

  //to handle onchange
  const handleOnChange = (newValue, e) => {
    setText(newValue);
  };

  //to lock unlock
  const handleLockToggle = () => {
    setIsLocked((prevIsLocked) => !prevIsLocked);
    toast.success(`Editor ${isLocked ? "Unlocked" : "Locked"}`, "success");
  };

  //to save the code
  const handleSave = () => {
    // Create a Blob with the code content
    const blob = new Blob([text], { type: "text/plain" });

    // Determine the file name with the language extension
    const fileName = `code.${language}`;

    // Save the Blob as a file using FileSaver.js
    FileSaver.saveAs(blob, fileName);

    toast.success("File Saved!", "success");
  };

  return (
    <div className="editor-comp">
      <div className="Editor-area">
        <Editor
          height={"80vh"}
          theme={theme}
          defaultLanguage={language}
          defaultValue={text}
          onChange={handleOnChange}
          options={{
            readOnly: isLocked, // Enable/disable editor based on isLocked state
            wordWrap: "on", // Set word wrap to "off" to disable
          }}
        />
      </div>
      <div className="buttons-area">
        <button onClick={handleLockToggle}>
          {isLocked ? "Unlock" : "Lock"}
        </button>
        <button onClick={handleCopy}>Copy</button>
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default CodeEditorWindow;
