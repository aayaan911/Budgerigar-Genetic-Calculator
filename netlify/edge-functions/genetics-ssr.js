// ============================================================
// Netlify Edge Function — Server-Side Render Budgerigar Pairings
// ------------------------------------------------------------
// Purpose: When a URL contains pairing params (e.g.
//   /?m=Light%20Green&mt=Opaline:visual&f=Cobalt&ft=Spangle:SF)
// AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Googlebot)
// see the predicted offspring rendered as static HTML instead
// of a blank page that requires JavaScript to load results.
//
// Engine ported verbatim from index.html. KEEP IN SYNC when
// engine changes. Source of truth = index.html.
//   ENGINE VERSION: v2.0 (2026-06-01 — includes Lacewing,
//   Crest lethal flag, Dominant Clearbody, DEC detection).
// ============================================================

// ----- Base colour locus map -----
const _0xC1 = {
  "Light Green":         { B: ["B","B"], D: ["d","d"] },
  "Dark Green":          { B: ["B","B"], D: ["D","d"] },
  "Olive Green":            { B: ["B","B"], D: ["D","D"] },
  "Sky Blue":            { B: ["b","b"], D: ["d","d"] },
  "Cobalt":              { B: ["b","b"], D: ["D","d"] },
  "Mauve":               { B: ["b","b"], D: ["D","D"] },
  "Light Green / Blue":  { B: ["B","b"], D: ["d","d"] },
  "Dark Green / Blue":   { B: ["B","b"], D: ["D","d"] },
  "Olive Green / Blue":  { B: ["B","b"], D: ["D","D"] }
};

function _0xC2(Bg, Dg) {
  if (Bg === "bb") {
    if (Dg === "dd") return "Sky Blue";
    if (Dg === "Dd") return "Cobalt";
    return "Mauve";
  }
  const g = Dg === "dd" ? "Light Green" : Dg === "Dd" ? "Dark Green" : "Olive Green";
  return Bg === "Bb" ? g + " / Blue" : g;
}

// ----- Mutation registry -----
const _0xC9 = [
  { id: "Opaline", label: "Opaline", type: "SL" },
  { id: "Cinnamon", label: "Cinnamon", type: "SL" },
  { id: "Ino", label: "Ino", type: "SL" },
  { id: "Lacewing", label: "Lacewing", type: "SL" },
  { id: "Slate", label: "Slate", type: "SL" },
  { id: "TexasClearbody", label: "Texas Clearbody", type: "SL" },
  { id: "RecessivePied", label: "Recessive Pied", type: "AR" },
  { id: "Fallow", label: "Fallow", type: "AR" },
  { id: "Clearwing", label: "Clearwing", type: "AR" },
  { id: "Greywing", label: "Greywing", type: "AR" },
  { id: "Dilute", label: "Dilute", type: "AR" },
  { id: "BlackFace", label: "Black Face", type: "AR" },
  { id: "Blackwing", label: "Blackwing", type: "AR" },
  { id: "Saddleback", label: "Saddleback", type: "AR" },
  { id: "Anthracite", label: "Anthracite", type: "AD" },
  { id: "Grey", label: "Grey Factor", type: "AD" },
  { id: "Violet", label: "Violet Factor", type: "AD" },
  { id: "YellowFace", label: "Yellow Face", type: "AD" },
  { id: "Goldenface", label: "Goldenface", type: "AD" },
  { id: "Spangle", label: "Spangle", type: "AD" },
  { id: "DominantPied", label: "Dominant Pied", type: "AD" },
  { id: "DutchPied", label: "Dutch Pied", type: "AD" },
  { id: "Darkwing", label: "Darkwing", type: "AD" },
  { id: "DominantClearbody", label: "Dominant Clearbody (Easley)", type: "AD" },
  { id: "Crest", label: "Crest", type: "AD" }
];

// ----- Pure engine functions (verbatim from index.html) -----
function _0xSA(a, b) { const u = a === a.toUpperCase() ? 0 : 1, v = b === b.toUpperCase() ? 0 : 1; return u <= v ? a + b : b + a; }

function _0xA1(c1, c2) {
  const g1 = _0xC1[c1] || _0xC1["Light Green"], g2 = _0xC1[c2] || _0xC1["Light Green"];
  const B = {}, D = {};
  for (const a of g1.B) for (const b of g2.B) { const k = _0xSA(a, b); B[k] = (B[k] || 0) + 0.25; }
  for (const a of g1.D) for (const b of g2.D) { const k = _0xSA(a, b); D[k] = (D[k] || 0) + 0.25; }
  const out = [];
  for (const [Bg, Bp] of Object.entries(B)) for (const [Dg, Dp] of Object.entries(D)) {
    out.push({ color: _0xC2(Bg, Dg), pct: Bp * Dp * 100 });
  }
  const m = {}; for (const r of out) m[r.color] = (m[r.color] || 0) + r.pct;
  return Object.entries(m).map(([color, pct]) => ({ color, pct })).filter(r => r.pct > 0);
}

function _0xA2(res) {
  const out = [...res];
  out.sort((a, b) => { const ag = a.color.includes("Green") ? 0 : 1, bg = b.color.includes("Green") ? 0 : 1; return ag !== bg ? ag - bg : b.pct - a.pct; });
  return out;
}

function _0xA3(c) {
  if (c.includes("// ")) { const i = c.indexOf("// "); return { name: c.slice(0, i).trim(), conf: [], poss: c.slice(i + 3).split("// ") }; }
  if (c.includes(" / ")) { const i = c.indexOf(" / "); return { name: c.slice(0, i), conf: c.slice(i + 3).split(" / "), poss: [] }; }
  return { name: c, conf: [], poss: [] };
}

function _0xA4(m, f) {
  const ms = m || "normal", fs = f || "normal";
  if (ms === "visual" && fs === "visual") return [{ status: "visual", pct: 100 }];
  if ((ms === "visual" && fs === "split") || (ms === "split" && fs === "visual")) return [{ status: "visual", pct: 50 }, { status: "split", pct: 50 }];
  if ((ms === "visual" && fs === "normal") || (ms === "normal" && fs === "visual")) return [{ status: "split", pct: 100 }];
  if (ms === "split" && fs === "split") return [{ status: "visual", pct: 25 }, { status: "possibleSplit", pct: 75 }];
  if ((ms === "split" && fs === "normal") || (ms === "normal" && fs === "split")) return [{ status: "possibleSplit", pct: 100 }];
  return [{ status: "normal", pct: 100 }];
}

function _0xA5(mSt, fSt) {
  const dA = mSt === "visual" ? ["m", "m"] : mSt === "split" ? ["m", "n"] : ["n", "n"], mZ = fSt === "visual" ? "m" : "n";
  const mc = { visual: 0, split: 0, normal: 0 }, fc = { visual: 0, normal: 0 };
  for (const d of dA) { const combo = [d, mZ].sort().join(""); if (combo === "mm") mc.visual++; else if (combo === "mn") mc.split++; else mc.normal++; if (d === "m") fc.visual++; else fc.normal++; }
  const out = [];
  if (mc.visual > 0) out.push({ sex: "male", status: "visual", pct: (mc.visual / 4) * 100 });
  if (mc.split > 0) out.push({ sex: "male", status: "split", pct: (mc.split / 4) * 100 });
  if (mc.normal > 0) out.push({ sex: "male", status: "normal", pct: (mc.normal / 4) * 100 });
  if (fc.visual > 0) out.push({ sex: "female", status: "visual", pct: (fc.visual / 4) * 100 });
  if (fc.normal > 0) out.push({ sex: "female", status: "normal", pct: (fc.normal / 4) * 100 });
  return out;
}

function _0xA6(mSt, fSt) {
  const toA = s => s === "DF" ? ["D", "D"] : s === "SF" ? ["D", "N"] : ["N", "N"], mA = toA(mSt), fA = toA(fSt), cnt = { DF: 0, SF: 0, normal: 0 };
  for (const a of mA) for (const b of fA) { const p = [a, b].sort().join(""); if (p === "DD") cnt.DF++; else if (p === "DN") cnt.SF++; else cnt.normal++; }
  return [
    { label: "Double Factor (DF)", status: "DF", pct: (cnt.DF / 4) * 100 },
    { label: "Single Factor (SF)", status: "SF", pct: (cnt.SF / 4) * 100 },
    { label: "Normal", status: "normal", pct: (cnt.normal / 4) * 100 }
  ].filter(r => r.pct > 0);
}

function _0xA7(baseRes, arMuts, adMuts) {
  let pool = baseRes.map(r => { const { name, conf, poss } = _0xA3(r.color); return { baseName: name, pct: r.pct, vis: [], conf: [...conf], poss: [...poss], ad: [] }; });
  for (const mut of arMuts) {
    const next = [];
    for (const curr of pool) for (const o of mut.offspring) {
      const n = { ...curr, pct: curr.pct * o.pct / 100, vis: [...curr.vis], conf: [...curr.conf], poss: [...curr.poss], ad: [...curr.ad] };
      if (o.status === "visual") n.vis.push(mut.label);
      else if (o.status === "split") n.conf.push(mut.label);
      else if (o.status === "possibleSplit") n.poss.push(mut.label);
      next.push(n);
    }
    pool = next;
  }
  for (const mut of adMuts) {
    const next = [];
    for (const curr of pool) for (const o of mut.offspring) {
      const n = { ...curr, pct: curr.pct * o.pct / 100, vis: [...curr.vis], conf: [...curr.conf], poss: [...curr.poss], ad: [...curr.ad] };
      if (o.status === "DF") n.ad.push({ label: mut.label, factor: "DF" });
      else if (o.status === "SF") n.ad.push({ label: mut.label, factor: "SF" });
      next.push(n);
    }
    pool = next;
  }
  const named = pool.map(c => {
    let base = c.baseName;
    const vis = [...c.vis];
    const ad = [...c.ad];
    const gI = ad.findIndex(a => a.label === "Grey Factor");
    if (gI >= 0) {
      const greyFactor = ad[gI]; ad.splice(gI, 1);
      if (base === "Sky Blue") base = "Grey";
      else if (base === "Cobalt") base = "Dark Grey";
      else if (base === "Mauve") base = "Mauve Grey";
      else if (base === "Light Green") base = "Grey Green";
      else if (base === "Dark Green") base = "Dark Grey Green";
      else if (base === "Olive Green") base = "Olive Grey Green";
      else if (base === "Light Green / Blue") base = "Grey Green / Blue";
      else if (base === "Dark Green / Blue") base = "Dark Grey Green / Blue";
      else if (base === "Olive Green / Blue") base = "Olive Grey Green / Blue";
      else base = "Grey " + base;
      if (greyFactor.factor === "DF") base = "DF " + base;
    }
    const vI = ad.findIndex(a => a.label === "Violet Factor");
    if (vI >= 0) {
      const v = ad[vI]; ad.splice(vI, 1);
      base = "Violet " + base;
      if (v.factor === "DF") base = "DF " + base;
    }
    const yI = ad.findIndex(a => a.label === "Yellow Face");
    if (yI >= 0) {
      const yf = ad[yI]; ad.splice(yI, 1);
      base = "Yellow Face " + base;
      if (yf.factor === "DF") base = "DF " + base;
    }
    const dpI = ad.findIndex(a => a.label === "Dutch Pied");
    const rpVisIdx = vis.indexOf("Recessive Pied");
    let isDEC = false;
    if (dpI >= 0 && rpVisIdx >= 0) {
      isDEC = true;
      ad.splice(dpI, 1);
      vis.splice(rpVisIdx, 1);
    }
    const crI = ad.findIndex(a => a.label === "Crest");
    if (crI >= 0) {
      const cr = ad[crI]; ad.splice(crI, 1);
      if (cr.factor === "DF") base = "DF Crest (Lethal) " + base;
      else base = "Crested " + base;
    }
    const dcI = ad.findIndex(a => a.label === "Dominant Clearbody (Easley)");
    if (dcI >= 0) {
      const dc = ad[dcI]; ad.splice(dcI, 1);
      const pre = dc.factor === "DF" ? "DF Easley Clearbody " : "Easley Clearbody ";
      base = pre + base;
    }
    for (const a of ad) {
      const pre = a.factor === "DF" ? "DF " : "";
      base = pre + a.label + " " + base;
    }
    if (isDEC) {
      const isGreen = base.includes("Green");
      base = (isGreen ? "Dark-Eyed Clear Yellow " : "Dark-Eyed Clear White ") + base;
    }
    let name = base;
    if (vis.length) name += " " + vis.join(" ");
    if (c.conf.length) name += " / " + c.conf.join(" / ");
    if (c.poss.length) name += " // " + c.poss.join(" // ");
    return { name: name.trim().replace(/\s+/g, " "), pct: c.pct };
  });
  const merged = [];
  for (const r of named) { const ex = merged.find(x => x.name === r.name); if (ex) ex.pct += r.pct; else merged.push({ ...r }); }
  return merged.sort((a, b) => b.pct - a.pct);
}

function _0xA8(arr) { return arr.slice().sort((a, b) => b.pct - a.pct); }

function _0xINO(nm) {
  if (nm.startsWith("Mauve Grey")) nm = nm.replace("Mauve Grey", "Mauve Grey Albino");
  else if (nm.startsWith("Dark Grey Green")) nm = nm.replace("Dark Grey Green", "Dark Grey Lutino");
  else if (nm.startsWith("Olive Grey Green")) nm = nm.replace("Olive Grey Green", "Olive Grey Lutino");
  else if (nm.startsWith("Grey Green")) nm = nm.replace("Grey Green", "Grey Lutino");
  else if (nm.startsWith("Dark Grey")) nm = nm.replace("Dark Grey", "Dark Grey Albino");
  else if (nm.startsWith("Grey ")) nm = nm.replace("Grey ", "Grey Albino ");
  else if (nm.startsWith("Grey")) nm = nm.replace("Grey", "Grey Albino");
  // (Visual Violet rename removed — Cobalt now uniformly "Violet Cobalt", handled by generic "Violet " prefix below)
  else if (nm.startsWith("Violet ")) nm = nm.replace("Violet ", "Violet Albino ");
  else if (nm.includes("Sky Blue")) nm = nm.replace("Sky Blue", "Albino");
  else if (nm.includes("Cobalt")) nm = nm.replace("Cobalt", "Cobalt Albino");
  else if (nm.includes("Mauve")) nm = nm.replace("Mauve", "Mauve Albino");
  else if (nm.includes("Light Green")) nm = nm.replace("Light Green", "Lutino");
  else if (nm.includes("Dark Green")) nm = nm.replace("Dark Green", "Dark Lutino");
  else if (nm.includes("Olive Green")) nm = nm.replace("Olive Green", "Olive Lutino");
  else nm = "Ino " + nm;
  return nm;
}

function _0xB1(p1p, p1t, p2p, p2t) {
  if (!p1p || !p2p) return null;
  const _0xD8 = _0xA1(p1p, p2p), _0xD7 = _0xA2(_0xD8);
  const mt = {};
  const _0xD2 = (id, side, st) => {
    if (!id || id === "None") return;
    if (!mt[id]) mt[id] = { m: "normal", f: "normal" };
    const rank = { visual: 3, DF: 3, split: 2, SF: 2, possibleSplit: 1, normal: 0 }, cur = mt[id][side];
    if ((rank[st] || 0) >= (rank[cur] || 0)) mt[id][side] = st || "normal";
  };
  for (const t of (p1t || [])) _0xD2(t.id, "m", t.status);
  for (const t of (p2t || [])) _0xD2(t.id, "f", t.status);
  const arMuts = [], adMuts = [], slMuts = [];
  for (const [id, { m, f }] of Object.entries(mt)) {
    const mut = _0xC9.find(x => x.id === id); if (!mut) continue;
    if (mut.type === "AR") arMuts.push({ label: mut.label, offspring: _0xA4(m, f) });
    else if (mut.type === "AD") adMuts.push({ label: mut.label, offspring: _0xA6(m, f) });
    else if (mut.type === "SL") slMuts.push({ label: mut.label, m, f });
  }
  const combined = _0xA7(_0xD7, arMuts, adMuts);
  let _0xD9 = null;
  if (slMuts.length > 0) {
    let pool = combined.map(b => ({ name: b.name, pct: b.pct, sex: null }));
    for (const sl of slMuts) {
      const raw = _0xA5(sl.m, sl.f);
      const next = [];
      for (const curr of pool) {
        const appl = curr.sex === null ? raw : raw.filter(r => r.sex === curr.sex);
        const tot = appl.reduce((s, r) => s + r.pct, 0);
        if (tot === 0) continue;
        for (const s of appl) {
          let nm = curr.name;
          if (s.status === "visual") {
            if (sl.label === "Ino") nm = _0xINO(nm);
            else {
              const sp = nm.indexOf(" / "), dp = nm.indexOf(" // ");
              const cp = sp > -1 ? sp : dp > -1 ? dp : -1;
              const bb = cp > -1 ? nm.slice(0, cp) : nm;
              const ba = cp > -1 ? nm.slice(cp) : "";
              nm = `${sl.label} ${bb}${ba}`;
            }
          } else if (s.status === "split") {
            const splitMark = (sl.m === "split" && sl.f !== "visual") ? " // " : " / ";
            const sp = nm.indexOf(" / "), dp = nm.indexOf(" // ");
            const cp = sp > -1 ? sp : dp > -1 ? dp : -1;
            const bb = cp > -1 ? nm.slice(0, cp) : nm;
            const ba = cp > -1 ? nm.slice(cp) : "";
            nm = `${bb}${splitMark}${sl.label}${ba}`;
          }
          next.push({ name: nm.trim().replace(/\s+/g, " "), pct: curr.pct * (s.pct / tot), sex: s.sex || curr.sex });
        }
      }
      pool = next;
    }
    const mrg = arr => { const mg = []; for (const r of arr) { const ex = mg.find(x => x.name === r.name); if (ex) ex.pct += r.pct; else mg.push({ ...r }); } return mg.sort((a, b) => b.pct - a.pct); };
    const isComb = slMuts.every(sl => sl.m === "visual" && sl.f === "visual");
    const mFinal = _0xA8(mrg(pool.filter(r => r.sex === "male")));
    const fFinal = _0xA8(mrg(pool.filter(r => r.sex === "female")));
    _0xD9 = { label: slMuts.map(sl => sl.label).join(" + "), combined: isComb, maleOffspring: mFinal, femaleOffspring: fFinal };
  }
  return { combined: _0xA8(combined), slMut: _0xD9, adMut: null };
}

// ============================================================
// SSR rendering helpers
// ============================================================

function escapeHtml(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function fmtPct(p) { return p % 1 === 0 ? p.toFixed(0) : p.toFixed(1); }

function labelize(base, traits) {
  if (!base) return "?";
  const vis = [], splits = [];
  for (const t of traits || []) {
    if (!t.id || t.id === "None") continue;
    const m = _0xC9.find(x => x.id === t.id);
    if (!m) continue;
    if (t.status === "visual") vis.push(m.label);
    else if (t.status === "SF") vis.push("SF " + m.label);
    else if (t.status === "DF") vis.push("DF " + m.label);
    else if (t.status === "split") splits.push(m.label);
  }
  let s = base;
  if (vis.length) s += " " + vis.join(" ");
  if (splits.length) s += " / " + splits.join(" / ");
  return s;
}

function renderList(arr) {
  if (!arr || !arr.length) return '<p style="color:#a8a8a8;margin:6px 0;">No offspring predicted.</p>';
  let h = '<ul style="list-style:none;padding:0;margin:0;">';
  for (const o of arr) {
    h += `<li style="padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.05);font-size:14px;"><span style="display:inline-block;min-width:54px;font-family:'DM Mono',monospace;color:#4ca154;font-weight:600;">${fmtPct(o.pct)}%</span> <span style="color:#e6e6e6;">${escapeHtml(o.name)}</span></li>`;
  }
  h += "</ul>";
  return h;
}

function renderSSR(p1p, p1t, p2p, p2t, results) {
  const p1Label = labelize(p1p, p1t);
  const p2Label = labelize(p2p, p2t);
  // Self-contained styles so the section is mobile-safe regardless of host CSS state
  let h = `<style>
    #ssr-pairing-results{box-sizing:border-box;background:rgba(76,161,84,0.06);border:1px solid rgba(76,161,84,0.25);border-radius:16px;padding:24px 26px;margin:28px auto;max-width:860px;font-family:'DM Sans',sans-serif;color:#e6e6e6;}
    #ssr-pairing-results h2{font-size:22px;font-weight:700;margin-bottom:6px;color:#fff;letter-spacing:-0.01em;word-wrap:break-word;overflow-wrap:break-word;}
    #ssr-pairing-results .ssr-cols{display:grid;grid-template-columns:1fr 1fr;gap:18px;}
    @media(max-width:560px){
      #ssr-pairing-results{padding:18px 16px;margin:18px auto;border-radius:12px;}
      #ssr-pairing-results h2{font-size:18px;}
      #ssr-pairing-results .ssr-cols{grid-template-columns:1fr;gap:8px;}
    }
    @media(max-width:380px){
      #ssr-pairing-results h2{font-size:16px;}
    }
  </style>`;
  h += `<section id="ssr-pairing-results" aria-label="Predicted offspring (server-rendered)">`;
  h += `<p style="font-family:'DM Mono',monospace;font-size:10px;letter-spacing:0.15em;text-transform:uppercase;color:#4ca154;font-weight:700;margin-bottom:10px;">Pairing Prediction</p>`;
  h += `<h2>${escapeHtml(p1Label)} ♂ × ${escapeHtml(p2Label)} ♀</h2>`;
  h += `<p style="font-size:13px;color:#a8a8a8;margin-bottom:18px;">Pre-computed offspring predictions for this pairing. Open the interactive calculator below to adjust.</p>`;
  if (results.slMut) {
    h += `<h3 style="font-size:14px;font-weight:700;margin:14px 0 8px;color:#fff;">Sex-linked offspring (${escapeHtml(results.slMut.label)})</h3>`;
    h += `<div class="ssr-cols">`;
    h += `<div><p style="font-family:'DM Mono',monospace;font-size:11px;color:#a8a8a8;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:6px;">♂ Cocks</p>${renderList(results.slMut.maleOffspring)}</div>`;
    h += `<div><p style="font-family:'DM Mono',monospace;font-size:11px;color:#a8a8a8;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:6px;">♀ Hens</p>${renderList(results.slMut.femaleOffspring)}</div>`;
    h += `</div>`;
  } else {
    h += `<h3 style="font-size:14px;font-weight:700;margin:14px 0 8px;color:#fff;">Predicted Offspring</h3>`;
    h += renderList(results.combined);
  }
  h += `<p style="margin-top:18px;font-size:13px;color:#a8a8a8;"><a href="/" style="color:#4ca154;text-decoration:none;border-bottom:1px solid rgba(76,161,84,0.35);">↗ Open interactive Budgerigar Genetics Calculator</a></p>`;
  h += `</section>`;
  return h;
}

// ============================================================
// Edge Function entry point
// ============================================================

export default async (request, context) => {
  const url = new URL(request.url);

  // Only intercept root path
  if (url.pathname !== "/" && url.pathname !== "/index.html") {
    return; // pass through
  }
  // Only SSR when a pairing is present in the URL
  const hasPairing = url.searchParams.has("m") || url.searchParams.has("f");
  if (!hasPairing) return; // no params → no SSR needed

  // Backward-compat: rename old base names from before the Olive Green migration.
  const BASE_ALIAS = {
    "DD Green": "Olive Green",
    "DD Green / Blue": "Olive Green / Blue",
    "Visual Violet": "Violet SF",
    "DF Visual Violet": "Violet DF"
  };
  const aliasBase = v => BASE_ALIAS[v] || v;

  // Base shortcuts — keep in sync with index.html _0xShortcut.
  const SHORTCUT = {
    "Grey Green SF": { base: "Light Green", mut: { id: "Grey",   status: "SF" } },
    "Grey Green DF": { base: "Light Green", mut: { id: "Grey",   status: "DF" } },
    "Grey SF":       { base: "Sky Blue",    mut: { id: "Grey",   status: "SF" } },
    "Grey DF":       { base: "Sky Blue",    mut: { id: "Grey",   status: "DF" } },
    "Violet SF":     { base: "Cobalt",      mut: { id: "Violet", status: "SF" } },
    "Violet DF":     { base: "Cobalt",      mut: { id: "Violet", status: "DF" } }
  };
  const resolveBase = (name) => SHORTCUT[name] ? { base: SHORTCUT[name].base, autoMut: SHORTCUT[name].mut } : { base: name, autoMut: null };

  // Parse params
  const p1pRaw = aliasBase(url.searchParams.get("m") || "");
  const p2pRaw = aliasBase(url.searchParams.get("f") || "");
  // Opaline status — absent param means NORMAL (no Opaline), matching site URL semantics
  const p1Op = url.searchParams.get("mo") || "normal";
  const p2Op = url.searchParams.get("fo") || "normal";
  const parseTraits = (str) => (str || "").split(",").filter(Boolean).map(s => {
    const [id, status] = s.split(":");
    return { id, status: status || "visual" };
  });
  let p1t = parseTraits(url.searchParams.get("mt"));
  let p2t = parseTraits(url.searchParams.get("ft"));
  // Opaline is a special standalone control in the UI — re-inject if non-normal
  if (p1Op && p1Op !== "normal" && !p1t.find(t => t.id === "Opaline")) p1t.push({ id: "Opaline", status: p1Op });
  if (p2Op && p2Op !== "normal" && !p2t.find(t => t.id === "Opaline")) p2t.push({ id: "Opaline", status: p2Op });

  // Expand shortcuts → real base + auto-injected mutation
  const mr = resolveBase(p1pRaw), fr = resolveBase(p2pRaw);
  const p1p = mr.base, p2p = fr.base;
  if (mr.autoMut) p1t = [...p1t, mr.autoMut];
  if (fr.autoMut) p2t = [...p2t, fr.autoMut];

  // Reject invalid base colors (after shortcut expansion) — pass through to JS
  if (!_0xC1[p1p] || !_0xC1[p2p]) return;

  // Run engine
  let results;
  try { results = _0xB1(p1p, p1t, p2p, p2t); }
  catch (e) { return; } // engine failure → fall through to JS render

  if (!results) return; // invalid pairing → no SSR injection

  // For SSR display labels, use the original shortcut names (e.g. "Violet SF")
  // instead of the expanded base so the title/h2 match what the user picked.
  const p1pDisplay = SHORTCUT[p1pRaw] ? p1pRaw : p1p;
  const p2pDisplay = SHORTCUT[p2pRaw] ? p2pRaw : p2p;
  // Hide the auto-injected mutation from the displayed trait list (it's already
  // baked into the shortcut name).
  const p1tDisplay = mr.autoMut ? p1t.filter(t => t !== mr.autoMut) : p1t;
  const p2tDisplay = fr.autoMut ? p2t.filter(t => t !== fr.autoMut) : p2t;

  // Fetch the original HTML
  const response = await context.next();
  let html = await response.text();

  // Inject the rendered HTML into the SSR slot (use display labels so shortcuts read naturally)
  const ssrHtml = renderSSR(p1pDisplay, p1tDisplay, p2pDisplay, p2tDisplay, results);
  html = html.replace("<!--SSR_RESULTS_SLOT-->", ssrHtml);

  // Update <title> + meta description so search snippets reflect this pairing
  const p1Label = labelize(p1pDisplay, p1tDisplay);
  const p2Label = labelize(p2pDisplay, p2tDisplay);
  const newTitle = `${p1Label} × ${p2Label} — Budgerigar Pairing Predictions | KinBird Aviary`;
  html = html.replace(/<title>[^<]*<\/title>/i, `<title>${escapeHtml(newTitle)}</title>`);

  const newDesc = `Predicted offspring for ${p1Label} ♂ × ${p2Label} ♀ budgerigar pairing. Budgerigar Genetics Calculator by KinBird Aviary.`;
  html = html.replace(/<meta name="description" content="[^"]*"\s*\/?>/i, `<meta name="description" content="${escapeHtml(newDesc)}"/>`);
  html = html.replace(/<meta property="og:title" content="[^"]*"\s*\/?>/i, `<meta property="og:title" content="${escapeHtml(newTitle)}"/>`);
  html = html.replace(/<meta property="og:description" content="[^"]*"\s*\/?>/i, `<meta property="og:description" content="${escapeHtml(newDesc)}"/>`);

  return new Response(html, {
    status: 200,
    headers: {
      "content-type": "text/html; charset=UTF-8",
      "cache-control": "public, max-age=300, s-maxage=3600",
      "x-ssr": "genetics-engine-v2.0"
    }
  });
};

export const config = { path: "/" };
