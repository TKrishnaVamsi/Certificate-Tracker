return (
  <div className="app">
    {/* HERO HEADER */}
    <header className="hero">
      <h1 className="hero-title">Certificate Tracker</h1>
      <p className="hero-subtitle">
        Manage, monitor, and renew your professional certifications
      </p>
    </header>

    <main className="container">

      <ReminderBanner certs={certs} />
      <SummaryCards certs={certs} />

      <section className="section">
        <h2>Add Certification</h2>
        <CertForm onSubmit={addCert} />
      </section>

      <section className="section">
        <h2>Search & Filter</h2>
        <div className="filters">
          <input
            placeholder="Search certification..."
            onChange={(e) => setSearch(e.target.value)}
          />

          <select onChange={(e) => setFilter(e.target.value)}>
            <option>All</option>
            <option>Active</option>
            <option>Expiring Soon</option>
            <option>Expired</option>
          </select>
        </div>
      </section>

      <section className="section">
        <h2>All Certifications</h2>
        <CertTable certs={filtered} onDelete={delCert} />
      </section>

      <section className="section">
        <h2>Certificate Vault</h2>
        <Vault certs={certs} />
      </section>

    </main>
  </div>
);
