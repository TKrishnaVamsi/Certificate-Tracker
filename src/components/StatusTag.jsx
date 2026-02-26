export default function StatusTag({ status }) {
  return <span className={`tag ${status.replace(/ /g, "-")}`}>{status}</span>;
}