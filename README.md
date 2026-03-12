# Pathfinder AI — Deploy Guide

## Files
```
pathfinder/
├── index.html        ← Frontend (the full app)
├── api/
│   └── analyze.js    ← Serverless function (Anthropic proxy)
└── vercel.json       ← Routing config
```

## Deploy to Vercel (free, ~5 min)

### Step 1 — Create accounts
- GitHub: https://github.com (free)
- Vercel: https://vercel.com (free, sign in with GitHub)

### Step 2 — Push to GitHub
1. Go to https://github.com/new
2. Name it `pathfinder-ai`, keep it Public, click Create
3. Upload all 3 files (drag & drop into GitHub UI):
   - index.html
   - api/analyze.js  ← make sure to create the `api` folder first
   - vercel.json

### Step 3 — Deploy on Vercel
1. Go to https://vercel.com/new
2. Click "Import" next to your `pathfinder-ai` repo
3. Leave all settings as default
4. Click "Deploy" — takes ~30 seconds

### Step 4 — Add your Anthropic API key
1. In Vercel dashboard → your project → Settings → Environment Variables
2. Add:
   - Name:  ANTHROPIC_API_KEY
   - Value: your key from https://console.anthropic.com
3. Click Save
4. Go to Deployments tab → click the 3 dots → "Redeploy"

### Done!
Your app is live at: https://pathfinder-ai.vercel.app (or similar)

## Get Anthropic API Key
1. Go to https://console.anthropic.com
2. Sign up (free $5 credit included)
3. API Keys → Create Key → copy it
