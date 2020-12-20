import React from "react";
import { BasicButton } from "../components/buttons/basic-button";
import { IButton } from "../components/buttons/button";

interface Tab {
  name: string;
  content: React.ReactNode;
}
interface Props {
  tabs: Tab[];
  ButtonType?: IButton;
}
export const BasicTabLayout: React.FunctionComponent<Props> = ({
  tabs,
  ButtonType = BasicButton,
}) => {
  const [activeTabIndex, setActiveTabIndex] = React.useState(0);
  const setTab = (selectedIndex: number) => () => {
    console.log(selectedIndex);
    setActiveTabIndex(selectedIndex);
  }

  return (
    <div className="container">
      <div className="tabs">
        {tabs.map((tab, i) => (
          <ButtonType onClick={setTab(i)} active={i === activeTabIndex}>
            {tab.name}
          </ButtonType>
        ))}
      </div>

      <div className="body">{tabs[activeTabIndex].content}</div>

      <style jsx>{`
        .tabs {
          display: flex;
        }

        .container {
          max-width: 960px;
          padding: 30px;
        }
      `}</style>
    </div>
  );
};
