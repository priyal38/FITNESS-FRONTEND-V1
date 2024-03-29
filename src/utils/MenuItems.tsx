import React from "react";
import { IoIosFitness, IoMdFitness } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { MdMenuBook } from "react-icons/md";
import { RiArticleFill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";

 export interface menuItem {
  text: string;
  path: string;
  icon: JSX.Element;
}

const UserMenuItems: menuItem[] = [
  { text: "Dashboard", path: "home", icon: <MdDashboard className=' mt-1' /> },
  { text: "Workout", path: "workout", icon: <IoIosFitness /> },
  { text: "Healthy Recipes", path: "healthyrecipes", icon: <MdMenuBook /> },
  { text: "Blogs & Articles", path: "blog", icon: <RiArticleFill /> },
  { text: "My Profile", path: "profile", icon: <FaRegUser /> }
];

const AdminMenuItems: menuItem[] = [
  { text: "Dashboard", path: "dashboard", icon: <MdDashboard className=' mt-1' /> },
  { text: "AddWorkout", path: "addworkout", icon: <IoIosFitness /> },
  { text: "AddBlog", path: "addblog", icon: <RiArticleFill /> },
  { text: "AddNutrition", path: "addNutritionPlan", icon: <MdMenuBook /> },
  { text: "Workout", path: "allworkout", icon: <IoIosFitness /> },
  { text: "Healthy Recipes", path: "allhealthyrecipes", icon: <MdMenuBook /> },
  { text: "Blogs & Articles", path: "allblog", icon: <RiArticleFill /> },
];

export { UserMenuItems, AdminMenuItems };
