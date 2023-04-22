import Editor from "./Editor";
import PostEdit from "./PostEdit";
import { useState } from "react";

function EditContainer(props) {
    const [showComponent1, setShowComponent1] = useState(true);
  
    const handleButtonClick = () => {
      setShowComponent1(!showComponent1);
    };
  
    return (
      <div>
        {showComponent1 ? (
          <PostEdit onButtonClick={handleButtonClick} id={ props.match.params.id }/>
        ) : (
          <Editor onButtonClick={handleButtonClick} />
        )}
      </div>
    );
  }

export default EditContainer;