import Editor from "./Editor";
import PostEdit from "./PostEdit";
import { useState } from "react";

function EditContainer(props) {
    const [showComponent, setShowComponent] = useState(true);
  
    const handleButtonClick = () => {
      console.log(showComponent)
      setShowComponent(!showComponent);
    };
  
    return (
      <div>
        {showComponent ? (
          <PostEdit onButtonClick={handleButtonClick} />
        ) : (
          <Editor onButtonClick={handleButtonClick} />
        )}
      </div>
    );
  }

export default EditContainer;