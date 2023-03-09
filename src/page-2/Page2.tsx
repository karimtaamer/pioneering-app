import React from "react";
import Button1 from "./components/Button1";
import Button2 from "./components/Button2";
import Button3 from "./components/Button3";

/**The container for all items visible on Page 1 */
const Page2 = () => {
  return (
    <div className="page2Container">
      <Button1 />
      <Button2 />
      <Button3/>
    </div>
  );
};

export default Page2;
