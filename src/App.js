import { Switch } from "@headlessui/react";
import { useState } from "react";
import Morning from "./components/Morning";
import Timer from "./components/Timer";
import UserProfile from "./components/UserProfile";

export default function App() {
  const [enabled, setEnabled] = useState(false)
  return (
    <div className={`${enabled ? "dark" : ""}`} >
      <div className="min-h-screen w-full dark:bg-slate-800 bg-slate-50 flex flex-col items-center justify-center  " >

        <div className="flex w-36 justify-between" >
          <p className="font-bold text-slate-800 dark:text-white" >Light</p>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${enabled ? 'bg-blue-600' : 'bg-gray-200 dark:bg-slate-600 '
              } relative inline-flex items-center h-6 rounded-full w-11`}
          >
            <span className="sr-only">Enable notifications</span>
            <span
              className={`${enabled ? 'translate-x-6' : 'translate-x-1'
                } inline-block w-4 h-4  bg-white dark:bg-slate-800 rounded-full transform transition ease-in-out duration-200 `}
            />
          </Switch>
          <p className="font-bold text-slate-800 dark:text-white" >Dark</p>
        </div>

        <div className="flex w-full justify-around  items-center lg:flex-row flex-col" >
          <UserProfile />
          <Morning />
          <Timer />
        </div>
      </div>
    </div >
  )
}