{approvedPlots.map((plot) => (
  <div
    key={plot._id}
    style={{
      border: "1px solid #ccc",
      padding: "12px",
      marginBottom: "10px",
      borderRadius: "6px",
    }}
  >
    <p><b>Plot No:</b> {plot.plotNumber}</p>
    <p><b>Status:</b> {plot.status}</p>

    {plot.deedPdf ? (
      <button
        onClick={() => {
          // 🔎 DEBUG
          console.log("Plot object:", plot);

          const url = `http://localhost:5000/download-deed/${plot.deedPdf}`;
          console.log("Download URL:", url);

          // ✅ Download PDF
          window.open(url, "_blank");
        }}
      >
        Download PDF
      </button>
    ) : (
      <>
        <p style={{ color: "red" }}>PDF not generated</p>

        {/* 🔎 Debug button */}
        <button
          onClick={() => {
            console.log("Plot object (NO PDF):", plot);
            alert("PDF not generated yet. Please contact admin.");
          }}
        >
          Debug
        </button>
      </>
    )}
  </div>
))}
