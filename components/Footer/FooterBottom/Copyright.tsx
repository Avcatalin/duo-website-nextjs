import React from "react";

interface CopyrightProps {
  year: string;
}

const CopyrightComponent: React.FC<CopyrightProps> = ({ year }) => {
  return (
    <div className="copyright w-2/5">
      <p>&copy; {year} - DUO DESIGN ADVERTISING</p>
    </div>
  );
};

export default CopyrightComponent;
