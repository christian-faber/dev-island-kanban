import LogoDark from "../assets/LogoDark";
import LogoLight from "../assets/LogoLight";

export const Logo = () => {
  return (
    <>
      {" "}
      <div className="dark:hidden flex-shrink-0  flex items-center py-2">
        <LogoDark />
      </div>
      <div className="hidden dark:flex flex-shrink-0 items-center py-2">
        <LogoLight />
      </div>
    </>
  );
};
