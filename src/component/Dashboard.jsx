


import React from "react";
import DepartmentWidget from "../component/Widgets/DepartmentWidget";
import RoleWidget from "../component/Widgets/RoleWidget";
import "../component/Widgets/Widget.css";

const Dashboard = () => {
  const departments = [
    {
      id: 1,
      department: "Engineering",
      employees: 120,
    },
    {
      id: 2,
      department: "HR",
      employees: 35,
    },
    {
      id: 3,
      department: "Finance",
      employees: 60,
    },
    {
      id: 4,
      department: "Sales",
      employees: 90,
    },
    


  ];

  const roles = [
    {
      id: 1,
      role: "Developer",
      employees: 80,
    },
    {
      id: 2,
      role: "QA",
      employees: 40,
    },
    {
      id: 3,
      role: "Manager",
      employees: 20,
    },
    {
      id: 4,
      role: "UI Designer",
      employees: 25,
    },
  ];

  return (
    <div className="dashboard">
      <DepartmentWidget departments={departments} />

      <RoleWidget roles={roles} />
    </div>
  );
};

export default Dashboard;