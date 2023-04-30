import "./styles.css";
import { useState } from "react";
import explorer from "./data/data";

import useTraverseTree from "./Hooks/useTraversetree"
import Folder from "./Components/Folder";

export default function App() {
  const [explorerdata, setexplorerdata] = useState(explorer);
  const { insertNode } = useTraverseTree();
  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerdata, folderId, item, isFolder);
    console.log(finalTree);

    setexplorerdata(finalTree);
  };
  return (
    <div className="App">
      <Folder handleInsertNode={handleInsertNode} explorerdata={explorerdata} />
    </div>
  );
}
