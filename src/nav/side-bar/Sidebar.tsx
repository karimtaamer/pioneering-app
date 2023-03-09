import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListOl,
  faChevronLeft,
  fa1,
  fa2,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";

/**The SideBar component
 */

const Sidebar = () => {
  const page1URL = "/page1";
  const page2URL = "/page2";
  const sessionUrlKey = "savedOption";

  const [isOpen, setIsOpen] = useState(false);
  //The current chosen option (persistent to page refresh)
  const [option, setOption] = React.useState<string | null>(page1URL);
  const { theme } = useContext(ThemeContext);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  /** Called when a link is clicked before redirecting, and sets the
   * local storage with the chosen link/item
   */
  const onLinkClickedHandler = (source: string) => {
    sessionStorage.setItem(sessionUrlKey, source);
    setOption(source);
  };

  /** Local state should read local storage after first render*/
  React.useEffect(() => {
    setOption(sessionStorage.getItem(sessionUrlKey) || page1URL);
  }, []);

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"} ${theme}`}>
      <div className={`toggle ${theme}`} onClick={toggleSidebar}>
        <FontAwesomeIcon icon={isOpen ? faChevronLeft : faListOl} />
      </div>
      <div className="links">
        <Link to={page1URL} onClick={() => onLinkClickedHandler(page1URL)}>
          {
            <div className={option === page1URL ? `chosenItem ${theme}` : ""}>
              <FontAwesomeIcon icon={fa1} /> {isOpen ? "Page 1" : null}
            </div>
          }
        </Link>

        <Link to={page2URL} onClick={() => onLinkClickedHandler(page2URL)}>
          {
            <div className={option === page2URL ? `chosenItem ${theme}` : ""}>
              <FontAwesomeIcon icon={fa2} /> {isOpen ? "Page 2" : null}
            </div>
          }
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
