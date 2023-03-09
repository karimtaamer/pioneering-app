import React from "react";
//@ts-ignore
import { slide as Menu } from "react-burger-menu";


interface ISideBarProps {
  pageWrapId:string
  outerContainerId:string
}

const SideBar: React.FunctionComponent<ISideBarProps> = ({pageWrapId, outerContainerId}) => {
  const page1URL = "/page1";
  const page2URL = "/page2";
  const sessionUrlKey = "savedOption";

  const [option, setOption] = React.useState<string | null >(page1URL);

  const onLinkClickedHandler = (source:string) => {
    sessionStorage.setItem(sessionUrlKey, source);
    setOption(source);
  };

  React.useEffect(() => {
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

