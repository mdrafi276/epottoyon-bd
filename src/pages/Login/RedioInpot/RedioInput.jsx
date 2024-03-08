import { Radio, Typography } from "@material-tailwind/react";
import { useState } from "react";


function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-full w-full scale-105"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function RedioInput() {
  const [redi, setRedi] = useState()
  return (
    <div className="flex justify-center gap-5">
      ( 
        
      )
      <h1>{redi}</h1>
      <Radio
      onChange={e => setRedi(e.target.value)}
        name="type"
        value="email"
        ripple={false}
        icon={<Icon />}
        className="border-gray-900/10 bg-white p-0 transition-all hover:before:opacity-0"
        label={
          <Typography
            color="blue-gray"
            className="font-normal text-black font-bold lg:text-[16px]"
          >
            ইমেল
          </Typography>
        }
      />
      <Radio
      onChange={e => setRedi(e.target.value)}
      
      value="phone"
        name="type"

        defaultChecked
        ripple={false}
        icon={<Icon />}
        className="border-gray-900/10 bg-white p-0 transition-all hover:before:opacity-0"
        label={
          <Typography
            color="blue-gray"
            className="  text-black font-bold md:text-[16px]"
          >
            মোবাইল নাম্বার
          </Typography>
        }
      />
    </div>
  );
}
