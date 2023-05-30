import { Button } from "./button";

type FooterProp = {
  id: number;
};

export const Footer = ({ id }: FooterProp) => {
  return (
    <div className="flex w-2/12 justify-between w-full mt-20">
      {/* {id > 1 ? <Button id={id - 1}>Prev</Button> : null} */}
      <Button id={id - 1}>Prev</Button>
      <Button id={id + 1}>Next</Button>
    </div>
  );
};
