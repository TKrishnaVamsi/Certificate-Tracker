export const loadCerts = () => JSON.parse(localStorage.getItem("certs") || "[]");
export const saveCerts = (data) => localStorage.setItem("certs", JSON.stringify(data));

// Status helpers
export function getStatus(expiry) {
  const today = new Date();
  const exp = new Date(expiry);
  const diff = Math.ceil((exp - today) / (1000 * 60 * 60 * 24));
  if (diff < 0) return "Expired";
  if (diff <= 30) return "Expiring Soon";
  return "Active";
}

export function daysLeft(expiry) {
  const today = new Date();
  const exp = new Date(expiry);
  return Math.ceil((exp - today) / (1000 * 60 * 60 * 24));
}