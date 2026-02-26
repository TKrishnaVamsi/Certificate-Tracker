export default function SummaryCards({ certs }) {
  const counts = { total: certs.length, active: 0, expired: 0, soon: 0 };
  certs.forEach((c) => {
    if (c.status === "Active") counts.active++;
    else if (c.status === "Expired") counts.expired++;
    else counts.soon++;
  });

  return (
    <div className="cards">
      <Card title="Total" value={counts.total} />
      <Card title="Active" value={counts.active} />
      <Card title="Expired" value={counts.expired} />
      <Card title="Expiring Soon" value={counts.soon} />
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="card">
      <h4>{title}</h4>
      <h2>{value}</h2>
    </div>
  );
}