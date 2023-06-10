import React from "react";

const profileListData = [
  {
    name: "NIFTY",
    color: "green",
    profitsVal: "0.35% ",
    value: " 18,245.32",
  },
  {
    name: "BANKNIFTY",
    color: "green",
    profitsVal: "0.7%",
    value: "39,156.1",
  },
  {
    name: "INDIA VIX",
    color: "red",
    profitsVal: "-10.9%",
    value: "12.12",
  },
];
const ProfileList: React.FC = () => (
  <ul className="flex justify-evenly">
    {profileListData.map((ele, i) => {
      return (
        <li className="text-right" key={i}>
          <p
            className="mx-0 text-[#4A4A4A] xl:text-[12px] text-[10px] uppercase"
            style={{ lineHeight: "8px" }}
          >
            {ele.name}
          </p>
          <p className="mx-0 text-sm font-medium mt-2">
            <span
              className={`text-[${
                ele.color === "green" ? "#27AE60" : "#FF6B6B"
              }] xl:text-[12px] text-[10px] mx-1`}
            >
              {ele.profitsVal}
            </span>
            {ele.value}
          </p>
        </li>
      );
    })}
  </ul>
);

export default ProfileList;
