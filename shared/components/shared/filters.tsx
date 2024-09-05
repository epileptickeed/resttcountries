import React from "react";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return <div className={className}>This is filters</div>;
};
