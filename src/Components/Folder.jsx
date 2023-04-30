import { useEffect, useState } from "react";

const Folder = ({ handleInsertNode, explorerdata }) => {
  const [expand, setexpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null
  });
  const handlenewfolder = (e, isFolder) => {
    e.stopPropagation();
    setexpand(true);
    setShowInput({
      visible: true,
      isFolder
    });
  };
  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      // add logic
      console.log(e);

      handleInsertNode(explorerdata.id, e.target.value, showInput.isFolder);
      console.log(explorerdata);

      setShowInput({
        ...showInput,
        visible: false
      });
    }
  };
  if (explorerdata?.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div
          className="folder"
          onClick={() => {
            setexpand(!expand);
          }}
        >
          <span> 📂 {explorerdata.name}</span>
          <div>
            <button
              onClick={(e) => {
                handlenewfolder(e, true);
              }}
            >
              folder +
            </button>
            <button
              onClick={(e) => {
                handlenewfolder(e, false);
              }}
            >
              {" "}
              file +
            </button>
          </div>
        </div>
        <div
          style={{
            display: expand ? "block" : "none",
            paddingLeft: 25
          }}
        >
          {showInput.visible && (
            <div className="inputContainer">
              <span>{showInput.isFolder ? "📂" : "🗃️"} </span>
              <input
                onKeyDown={onAddFolder}
                type="text"
                className="inputContainer__input"
                autoFocus
                onBlur={() => setShowInput({ ...showInput, visible: false })}
              />
            </div>
          )}
          {explorerdata.items.map((v) => {
            return (
              <Folder
                handleInsertNode={handleInsertNode}
                explorerdata={v}
                key={v.id}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return <span className="file">🗃️ {explorerdata.name}</span>;
  }
};
export default Folder;
