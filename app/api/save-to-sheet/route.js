export async function POST(req) {
  const body = await req.json();

  // Google Sheets URL
  const sheetUrl = "https://script.google.com/macros/s/AKfycbyjpkGxXW5HR8CEocVUZHeRkEiavwyo3rwG4al5PUweIU-SJd3PU4K8ZRogkINW1x8GdA/exec";

  try {
    const response = await fetch(sheetUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const text = await response.text();

    return new Response(JSON.stringify({ message: "Success", sheetResponse: text }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to send to Google Sheets", detail: error.message }), {
      status: 500,
    });
  }
}
