import StatusTag from "./StatusTag";

export default function CertTable({ certs, onDelete }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Issuer</th>
          <th>Status</th>
          <th>Expiry</th>
          <th>Countdown</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {certs.map((c, i) => (
          <tr key={i}>
            <td>{c.name}</td>
            <td>{c.issuer}</td>
            <td><StatusTag status={c.status} /></td>
            <td>{c.expiry}</td>
            <td>{c.countdown}</td>
            <td>
              <button onClick={() => onDelete(i)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}