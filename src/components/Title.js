import { Logo } from "./Logo";

export const Title = ({ board }) => {
  return (
    <div>
      <div className="p-3">
        <Logo />
        <h1>{board?.title}</h1>
      </div>

    </div>
  );
}
