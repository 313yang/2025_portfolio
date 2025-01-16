import "../../styles/header.css";

type locationType = "top" | "bottom";

export default function Header({ location }: { location: locationType; }) {
  return (
    <div className={`introduceText ${location}`}>
      <span>Hello! Yang Byeori's portpoilo! Moving with arrow key</span>
    </div>
  );
}
