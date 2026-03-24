export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Missing prompt' });
  }

  try {
    const apiKey = process.env.GEMINI_API_KEY;
    const MODEL = 'gemini-2.5-flash';
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
        generationConfig: {
          maxOutputTokens: 1000,
        },
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      return res.status(response.status).json({ error: err });
    }

    const data = await response.json();
    const raw = data.candidates?.[0]?.content?.parts?.map((p) => p.text || '').join('') ?? '';
    const clean = raw.replace(/```json|```/g, '').trim();
    const roadmap = JSON.parse(clean);

    return res.status(200).json({ roadmap });
  } catch (err) {
    console.error('Analyze error:', err);
    return res.status(500).json({ error: err.message });
  }
}
