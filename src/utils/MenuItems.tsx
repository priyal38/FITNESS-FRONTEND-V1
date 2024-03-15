import React from "react";
import { IoMdFitness } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { MdMenuBook } from "react-icons/md";
import { RiArticleFill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";

 export interface menuItem {
  text: string;
  path: string;
  icon: JSX.Element;
}

const UserMenuItems: menuItem[] = [
  { text: "Dashboard", path: "home", icon: <MdDashboard className=' mt-1' /> },
  { text: "Workout", path: "workout", icon: <IoMdFitness /> },
  { text: "Healthy Recipes", path: "healthyrecipes", icon: <MdMenuBook /> },
  { text: "Blogs & Articles", path: "blog", icon: <RiArticleFill /> },
  { text: "Setting", path: "setting", icon: <IoMdSettings /> }
];

const AdminMenuItems: menuItem[] = [
  { text: "Dashboard", path: "dashboard", icon: <MdDashboard className=' mt-1' /> },
  { text: "AddWorkout", path: "addworkout", icon: <IoMdFitness /> },
  { text: "AddBlog", path: "addblog", icon: <RiArticleFill /> },
  { text: "AddNutrition", path: "addNutritionPlan", icon: <MdMenuBook /> }
];

export { UserMenuItems, AdminMenuItems };
