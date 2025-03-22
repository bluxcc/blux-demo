import React, { useState } from "react";

import settings from "/images/settings.svg";

type Tab = {
  label: string;
  activeImg: string;
  inActiveImg: string;
  content: React.ReactNode;
};

type TabsProps = {
  tabs: Tab[];
};

const Tabs = ({ tabs }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(2);
  const [hoveredTab, setHoveredTab] = useState<number | null>(null);

  return (
    <div className="flex h-full">
      <div className="flex !w-[81px] font-jetbrains flex-col pt-4 pb-[17px] border-r border-lightPurple justify-between items-center text-primary">
        <div className="flex flex-col items-center">
          {tabs.map((tab, index) => {
            const isActive = activeTab === index;
            const isHovered = hoveredTab === index;

            return (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className="py-2 px-4 flex flex-col items-center font-normal text-[13px]"
                aria-selected={activeTab === index}
                role="tab"
                tabIndex={activeTab === index ? 0 : -1}
              >
                <div
                  className="center w-16 h-8 relative"
                  onMouseEnter={() => setHoveredTab(index)}
                  onMouseLeave={() => setHoveredTab(null)}
                >
                  <div
                    className={`absolute inset-0 rounded-full transition-colors 
                      ${
                        isActive
                          ? "bg-[#FFCDCD]"
                          : isHovered
                          ? "bg-[#E4E4E4]"
                          : "bg-transparent"
                      }
                    `}
                  />
                  <img
                    src={
                      isActive || isHovered ? tab.activeImg : tab.inActiveImg
                    }
                    alt={tab.label}
                    className="w-6 h-6 relative z-10 transition-all duration-150"
                  />
                </div>

                {tab.label}
              </button>
            );
          })}
        </div>
        <div>
          <button className="w-12 center h-12 bg-lightGray">
            <img src={settings} alt="settings" />
          </button>
        </div>
      </div>

      <div
        className="w-[310px] text-primary p-4 border-r border-lightPurple"
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
      >
        {tabs[activeTab]?.content}
      </div>
    </div>
  );
};

export default Tabs;
