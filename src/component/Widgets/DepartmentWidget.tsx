

import React from "react";
import "./Widget.css";

interface Department {
  id: number;
  department: string;
  employees: number;
}

interface Props {
  title?: string;
  departments: Department[];
}

const DepartmentWidget: React.FC<Props> = ({
  title = "Employees by Department",
  departments,
}) => {
  const maxEmployees = Math.max(
    ...departments.map((d) => d.employees),
    1
  );

  return (
    <div className="widget-card">
      <h2>{title}</h2>

      {departments.map((dept) => (
        <div className="widget-row" key={dept.id}>
          <span>{dept.department}</span>

          <div className="progress">
            <div
              className="progress-fill"
              style={{
                width: `${(dept.employees / maxEmployees) * 100}%`,
              }}
            ></div>
          </div>

          <strong>{dept.employees}</strong>
        </div>
      ))}
    </div>
  );
};

export default DepartmentWidget;