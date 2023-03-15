import React from "react";

interface MobileMenuProps {
  visible?: boolean;
}

export enum NAV_TITLES {
  HOME = "Home",
  SERIES = "Series",
  FILMS = "Films",
  NEW = "New & Popular",
  LIST = "My List",
  LANGUAGES = "Browse by languages",
}

export const MobileMenu = ({ visible }: MobileMenuProps) => {
  if (!visible) {
    return null;
  }
  return (
    <div className="bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-4">
        {Object.values(NAV_TITLES).map((value) => (
          <div
            key={value}
            className="px-3 text-center text-white hover:underline"
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};
