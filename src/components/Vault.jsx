export default function Vault({ certs }) {
  return (
    <div className="vault">
      {certs.filter((c) => c.file).map((c, i) => (
        <div key={i} className="vault-card">
          <h4>{c.name}</h4>
          {c.fileType?.includes("pdf") ? (
            <embed src={c.file} width="100%" height="200" />
          ) : (
            <img src={c.file} alt="cert" />
          )}
        </div>
      ))}
    </div>
  );
}