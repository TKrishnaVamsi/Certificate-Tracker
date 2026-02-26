export default function ReminderBanner({ certs }) {
  const soon = certs.filter((c) => c.status === "Expiring Soon");
  if (!soon.length) return null;

  return (
    <div className="banner">
      ⚠ {soon.length} certification(s) expiring within 30 days!
    </div>
  );
}