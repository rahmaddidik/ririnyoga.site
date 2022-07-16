import React from "react";

interface Props {
  name: string;
}

const Wish: React.FC<Props> = ({ name }: Props) => {
  return (
    <div className="wish-message">
      HAPPY WEDDING <span className="highlight">{name.toUpperCase()}</span> !!!
    </div>
  );
};

export default Wish;
