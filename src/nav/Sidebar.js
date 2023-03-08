import React, { useEffect, useState } from "react";
import { slide as Menu } from "react-burger-menu";
import "./Sidebar.css";

const SideBar = ({ pageWrapId, outerContainerId }) => {
  const page1URL = "/page1";
  const page2URL = "/page2";
  const sessionUrlKey = "savedOption";

  const [option, setOption] = useState(page1URL);

  const onLinkClickedHandler = (source) => {
    sessionStorage.setItem(sessionUrlKey, source);
    setOption(source);
  };

  useEffect(() => {
    setOption(sessionStorage.getItem(sessionUrlKey));
  }, []);

  return (
    <Menu pageWrapId={pageWrapId} outerContainerId={outerContainerId}>
      <a
        className={option === page1URL ? "menu-item-chosen" : "menu-item"}
        href={page1URL}
        onClick={() => {
          onLinkClickedHandler(page1URL);
        }}
      >
        Page 1
      </a>
      <a
        className={option === page2URL ? "menu-item-chosen" : "menu-item"}
        href={page2URL}
        onClick={() => {
          onLinkClickedHandler(page2URL);
        }}
      >
        Page 2
      </a>
    </Menu>
  );
};

export default SideBar;
