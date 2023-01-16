import { useParams } from "react-router-dom";

function $slug() {
  const { slug } = useParams();
  return <main className="proof-slug">{slug}</main>;
}

export default $slug;
