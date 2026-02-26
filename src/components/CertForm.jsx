import { useState } from "react";

export default function CertForm({ onSubmit }) {
  const [form, setForm] = useState({});
  const [preview, setPreview] = useState(null);

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setForm({ ...form, file: reader.result, fileType: file.type });
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(form);
        e.target.reset();
        setPreview(null);
      }}
    >
      <input placeholder="Certification Name" required onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Issuer" required onChange={(e) => setForm({ ...form, issuer: e.target.value })} />
      <label>Issue Date</label>
      <input type="date" required onChange={(e) => setForm({ ...form, issue: e.target.value })} />
      <label>Expiry Date</label>
      <input type="date" required onChange={(e) => setForm({ ...form, expiry: e.target.value })} />

      <input type="file" accept="image/*,.pdf" onChange={handleFile} />

      {preview && (
        <div className="preview">
          {form.fileType?.includes("pdf") ? (
            <embed src={preview} width="100%" height="200" />
          ) : (
            <img src={preview} alt="preview" />
          )}
        </div>
      )}

      <button>Add Certification</button>
    </form>
  );
}