"use strict";
const DE_UI = {
"Lighting, screen and key remapping – straight from your browser": "Beleuchtung, Display und Tastenbelegung – direkt im Browser",
"Not connected": "Nicht verbunden",
"Connect keyboard": "Tastatur verbinden",
"AK820 connected": "AK820 verbunden",
"Connected – data channel missing": "Verbunden – Datenkanal fehlt",
"interface(s) loaded": "Schnittstelle(n) geladen",
"This browser cannot talk to USB devices.": "Dieser Browser kann keine USB-Geräte ansprechen.",
"You need Chrome, Edge, Arc or Opera – Safari and Firefox do not support the interface.": "Nötig ist Chrome, Edge, Arc oder Opera – Safari und Firefox unterstützen die Schnittstelle nicht.",
"Lighting": "Beleuchtung",
"Screen": "Display",
"Key remapping": "Tastenbelegung",
"Settings": "Einstellungen",
"Expert": "Experte",
"The preview updates instantly. Nothing is sent until you click below.": "Die Vorschau zeigt den Effekt sofort. Übertragen wird erst, wenn du unten klickst.",
"Effect": "Effekt",
"Brightness": "Helligkeit",
"Speed": "Geschwindigkeit",
"Direction": "Richtung",
"Colour": "Farbe",
"Left": "Links",
"Down": "Runter",
"Up": "Hoch",
"Right": "Rechts",
"Rainbow": "Regenbogen",
"– overrides the colour": "– ignoriert die Farbwahl",
"Send to keyboard": "Auf die Tastatur übertragen",
"Pause preview": "Vorschau pausieren",
"Play preview": "Vorschau abspielen",
"The preview is a reconstruction, not read from the keyboard – the real effects differ in detail. Direction only applies to Scroll, Roll, Flow and Tilt.": "Die Vorschau ist nachgebaut, nicht von der Tastatur gelesen – die echten Effekte sehen im Detail anders aus. Die Richtung wirkt nur bei Scrollen, Rollen, Fließen und Neigen.",
"Technical details": "Technische Details",
"Image on the screen": "Bild auf dem Display",
"A photo, an animation or text – 128 × 128 pixels on the little display.": "Foto, Animation oder Text – 128 × 128 Pixel auf dem kleinen Bildschirm.",
"Choose an image file": "Bilddatei wählen",
"or write text": "oder Text schreiben",
"Separate lines with |, e.g. Hello|Chris": "Zeilen mit | trennen, z. B. Hallo|Chris",
"Text colour": "Schriftfarbe",
"Background": "Hintergrund",
"Size (0 = auto)": "Größe (0 = auto)",
"Apply text": "Text übernehmen",
"Preview": "Vorschau",
"Image crop": "Bildausschnitt",
"Horizontal": "Horizontal",
"Vertical": "Vertikal",
"Zoom": "Zoom",
"Smooth colour gradients": "Farbverläufe glätten",
"– reduces banding": "– hilft gegen Streifenbildung",
"Advanced options": "Erweiterte Optionen",
"Maximum number of frames": "Höchstzahl Einzelbilder",
"Transfer variant": "Übertragungsvariante",
"Payload = 256-byte header + frames of 32,768 bytes each, padded to multiples of 4096. Frame delays are stored as ms / 2, so 2–510 ms. The two variants come from two sources that disagree on three bytes.": "Nutzdaten = 256 Byte Kopf + Einzelbilder à 32 768 Byte, aufgefüllt auf Vielfache von 4096. Bildwechselzeiten werden als ms / 2 abgelegt, also 2–510 ms. Die beiden Varianten stammen aus zwei Quellen, die sich in drei Bytes uneinig sind.",
"Clock": "Uhrzeit",
"The keyboard has its own clock, which drifts over time.": "Die Tastatur hat eine eigene Uhr, die mit der Zeit abweicht.",
"Sync now": "Jetzt abgleichen",
"Send everything": "Alles übertragen",
"Keep in sync automatically": "Automatisch nachziehen",
"Every … minutes": "Alle … Minuten",
"“Send everything” runs clock, lighting and image one after another. The automatic sync only runs while this page stays open.": "„Alles übertragen\" spielt Uhrzeit, Beleuchtung und Bild nacheinander ab. Der automatische Abgleich läuft nur, solange diese Seite geöffnet ist.",
"Which key is this?": "Welche Taste ist das?",
"Switch the monitor on and press a key – useful when the legend is wrong.": "Monitor einschalten und eine Taste drücken – nützlich, wenn die Beschriftung nicht stimmt.",
"Monitor on": "Monitor an",
"Do not trigger the key": "Taste nicht ausführen",
"Switch the monitor on and press a key": "Monitor einschalten und eine Taste drücken",
"Use this key below": "Diese Taste unten übernehmen",
"Watch knob and media keys": "Drehregler und Medientasten beobachten",
"While the monitor is on, input fields will not behave normally – switch it off afterwards. Media keys and the knob often produce no keyboard event; that is what the second button is for.": "Solange der Monitor an ist, reagieren Eingabefelder nicht mehr normal – danach wieder ausschalten. Medientasten und der Drehregler erzeugen oft kein Tastaturereignis; dafür ist die zweite Schaltfläche da.",
"Remap a key": "Taste umbelegen",
"Handled by macOS, not by the keyboard – and it applies to this device only.": "Wird von macOS erledigt, nicht von der Tastatur – und gilt nur für dieses Gerät.",
"Key on the AK820": "Taste auf der AK820",
"should send": "soll senden",
"This keyboard only": "Nur diese Tastatur",
"– your built-in one stays untouched": "– die eingebaute bleibt unverändert",
"Add mapping": "Zuordnung hinzufügen",
"Terminal command": "Befehl fürs Terminal",
"Copy command": "Befehl kopieren",
"Make permanent": "Dauerhaft machen",
"Copy reset command": "Rücksetz-Befehl kopieren",
"Want a key to launch an app?": "Willst du, dass eine App startet?",
"Map it to F13. No Mac keyboard has that key, so nothing collides – and you can bind it freely in the Shortcuts app.": "Leg die Taste auf F13. Die gibt es auf keiner Mac-Tastatur, kollidiert also mit nichts – und lässt sich in der Kurzbefehle-App frei mit einer Aktion belegen.",
"How to make it permanent": "So machst du es dauerhaft",
"“Make permanent” downloads a startup file. Then, in Terminal:": "„Dauerhaft machen\" lädt eine Startdatei herunter. Danach im Terminal:",
"Without this the mapping is gone after a restart. Key combinations such as Cmd+Space are not possible – only key to key.": "Ohne das ist die Umbelegung nach einem Neustart wieder weg. Tastenkombinationen wie Cmd+Leertaste sind nicht möglich – nur Taste auf Taste.",
"Standby": "Standby",
"How long without input before the screen switches off.": "Nach welcher Zeit ohne Eingabe das Display abschaltet.",
"Switch off after": "Abschalten nach",
"Never": "Nie",
"1 minute": "1 Minute",
"5 minutes": "5 Minuten",
"30 minutes": "30 Minuten",
"Apply": "Übernehmen",
"The keyboard knows no steps other than these four.": "Mehr als diese vier Stufen kennt die Tastatur nicht.",
"Profile": "Profil",
"The keyboard will not reveal its current state – here you can record it yourself.": "Die Tastatur verrät ihren aktuellen Zustand nicht – hier kannst du ihn festhalten.",
"Save settings": "Einstellungen sichern",
"Load settings": "Einstellungen laden",
"Saved are lighting, standby, image crop and text template – no image files.": "Gesichert werden Beleuchtung, Standby, Bildausschnitt und Textvorlage – keine Bilddateien.",
"Devices": "Geräte",
"The AK820 reports four interfaces. Two of them are needed.": "Die AK820 meldet sich mit vier Schnittstellen. Zwei davon werden gebraucht.",
"Show AJAZZ only": "Nur AJAZZ anzeigen",
"Load already permitted": "Bereits erlaubte laden",
"Describe to log": "Beschreibung ins Log",
"Assignment": "Zuordnung",
"Control (0xFF13)": "Steuerung (0xFF13)",
"Data (0xFF68)": "Daten (0xFF68)",
"Report ID variant": "Report-ID-Variante",
"– none –": "– keins –",
"Variant A matches this keyboard's descriptor and is confirmed on real hardware.": "Variante A entspricht dem Deskriptor dieser Tastatur und ist auf echter Hardware bestätigt.",
"Send a single packet": "Einzelnes Paket senden",
"Hex bytes separated by spaces – padded to the report length": "Hex-Bytes, durch Leerzeichen getrennt – wird auf die Reportlänge aufgefüllt",
"Report ID": "Report-ID",
"Kind": "Art",
"Send": "Senden",
"Read feature report": "Feature-Report lesen",
"Command scanner": "Kommando-Scanner",
"The firmware echoes known commands back. That lets us sweep the command space.": "Die Firmware spiegelt bekannte Kommandos zurück. Damit lässt sich der Kommandoraum absuchen.",
"At your own risk.": "Auf eigene Gefahr.",
"Unknown commands can reset settings or write to flash. 0x02 is never sent, but a residual risk remains.": "Unbekannte Kommandos können Einstellungen zurücksetzen oder den Flash beschreiben. 0x02 wird nie gesendet, ein Restrisiko bleibt.",
"from": "von",
"to": "bis",
"Pause per command (ms)": "Pause je Kommando (ms)",
"Skip known ones": "Bekannte überspringen",
"I have read the warning": "Ich habe die Warnung gelesen",
"Start scan": "Scan starten",
"Cancel": "Abbrechen",
"command exists": "Kommando existiert",
"already known": "bereits bekannt",
"no response": "keine Antwort",
"error": "Fehler",
"Examine a command more closely": "Kommando genauer untersuchen",
"Step through every combination of byte 2 and byte 8 and group the responses. Different responses mean the byte is evaluated.": "Alle Kombinationen von Byte 2 und Byte 8 durchgehen und die Antworten gruppieren. Unterschiedliche Antworten heißt: das Byte wird ausgewertet.",
"Command": "Kommando",
"Byte 2 up to": "Byte 2 bis",
"Byte 8 up to": "Byte 8 bis",
"Examine": "Untersuchen",
"Log": "Protokoll",
"Copy": "Kopieren",
"Clear": "Leeren",
"Feature – control": "Feature – Steuerung",
"Output – data": "Output – Daten",
"Log acknowledgements: off": "Bestätigungen mitschreiben: aus",
"Make permanent downloads a startup file. Then run these three lines in Terminal:": "„Dauerhaft machen“ lädt eine Startdatei herunter. Danach diese drei Zeilen im Terminal ausführen:",
"Payload = 256-byte header plus frames of 32768 bytes each, padded to multiples of 4096. Frame delays are stored as milliseconds divided by two, so 2 to 510 ms. The two variants come from two sources that disagree on three bytes.": "Nutzdaten = 256 Byte Kopf plus Einzelbilder à 32768 Byte, aufgefüllt auf Vielfache von 4096. Bildwechselzeiten werden als Millisekunden geteilt durch zwei abgelegt, also 2 bis 510 ms. Die beiden Varianten stammen aus zwei Quellen, die sich in drei Bytes uneinig sind.",
"Send everything runs clock, lighting and image one after another. The automatic sync only works while this page stays open.": "„Alles übertragen“ spielt Uhrzeit, Beleuchtung und Bild nacheinander ab. Der automatische Abgleich läuft nur, solange diese Seite geöffnet ist.",
"Sequence: START 04 18, MODE_CFG 04 13, MODE_DATA, SAVE 04 02. In the data packet byte 0 is the effect value, bytes 1–3 are R/G/B, byte 8 the rainbow flag, bytes 9–11 brightness, speed and direction, trailer 55 AA on bytes 14/15.": "Ablauf: START 04 18, MODE_CFG 04 13, MODE_DATA, SAVE 04 02. Im Datenpaket ist Byte 0 der Effektwert, Bytes 1–3 sind R/G/B, Byte 8 das Regenbogen-Flag, Bytes 9–11 Helligkeit, Tempo und Richtung, Trailer 55 AA auf Byte 14/15.",
"Variant A matches this keyboard descriptor and is confirmed on real hardware.": "Variante A entspricht dem Deskriptor dieser Tastatur und ist auf echter Hardware bestätigt.",
"Without this the mapping is gone after a restart. Key combinations such as Cmd plus Space are not possible – only key to key.": "Ohne das ist die Umbelegung nach einem Neustart wieder weg. Tastenkombinationen wie Cmd plus Leertaste sind nicht möglich – nur Taste auf Taste."
};


/* ================= Sprachumschaltung ================= */
let LANG = "en";
const T = {
  "open":["open","geöffnet"], "closed":["closed","geschlossen"],
  "unnamed":["(unnamed)","(ohne Namen)"],
  "no-collections":["no collections","keine Collections"],
  "btn-close":["Close","Schließen"], "btn-open":["Open","Öffnen"],
  "no-devices":["No devices yet. Use “Connect keyboard” above.","Noch keine Geräte. Oben auf „Tastatur verbinden“ klicken."],
  "no-mapping":["No mapping yet.","Noch keine Zuordnung."],
  "ack-log":["Log acknowledgements: ","Bestätigungen mitschreiben: "],
  "on":["on","an"], "off":["off","aus"],
  "pause-preview":["Pause preview","Vorschau pausieren"],
  "play-preview":["Play preview","Vorschau abspielen"],
  "still":["Still image","Standbild"], "frame":["Frame","Bild"],
  "last-pressed":["last pressed","zuletzt gedrückt"],
  "from":["from","von"], "to":["to","nach"], "remove":["remove","entfernen"],
  "response":["Response (first 12 bytes)","Antwort (erste 12 Byte)"], "count":["Count","Anzahl"],
  "auto-active":["active, every","aktiv, alle"],
  "auto-next":["min – next run around","min – nächster Lauf gegen"],
  "not-connected":["Not connected","Nicht verbunden"],
  "connected":["AK820 connected","AK820 verbunden"],
  "no-data-ch":["Connected – data channel missing","Verbunden – Datenkanal fehlt"],
  "ifaces":["interface(s) loaded","Schnittstelle(n) geladen"],
  "frames-word":["frame(s)","Einzelbild(er)"],
  "payload-bytes":["bytes of data","Byte Nutzdaten"],
  "chunks-of":["chunks of 4096","Blöcke à 4096"],
  "runtime":["runtime","Laufzeit"],
  "no-code":["(no code)","(kein Code)"],
  "no-usage":["no known HID usage – not usable with hidutil","keine HID-Usage bekannt – für hidutil nicht nutzbar"],
  "not-in-list":[" (not in the list)"," (nicht in der Liste)"],
};
function t(k) { const e = T[k]; return e ? e[LANG === "de" ? 1 : 0] : k; }


"use strict";

const VID_AJAZZ  = 0x0C45;
const PIDS_WIRED = [0x8009, 0x800A];  // 0x800A: auf realer Hardware bestätigt
const UP_CONTROL = 0xFF13;
const UP_DATA    = 0xFF68;
const FRAME_PX   = 128 * 128 * 2;     // 32768
const CHUNK      = 4096;

const $ = (s) => document.querySelector(s);
const logEl = $("#log");
let devices = [];
let ackLogging = false;
let pixelData = null;

/* ---------- Logging ---------- */
function ts() {
  const d = new Date();
  const p = (n, w = 2) => String(n).padStart(w, "0");
  return `${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}.${p(d.getMilliseconds(), 3)}`;
}
function log(msg, cls = "info") {
  const line = document.createElement("div");
  line.className = "l-" + cls;
  line.textContent = `[${ts()}] ${msg}`;
  logEl.appendChild(line);
  logEl.scrollTop = logEl.scrollHeight;
}
// Fremddaten (Geraetenamen, Dateinamen, Tastencodes) niemals roh in innerHTML.
const esc = (s) => String(s).replace(/[&<>"']/g, (c) =>
  ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

function hx(n, w = 2) { return "0x" + n.toString(16).toUpperCase().padStart(w, "0"); }

function dump(u8, max = 128, indent = "    ") {
  const out = [];
  const n = Math.min(u8.length, max);
  for (let i = 0; i < n; i += 16) {
    const slice = Array.from(u8.slice(i, i + 16));
    out.push(indent + String(i).padStart(4, "0") + "  " +
      slice.map((b) => b.toString(16).toUpperCase().padStart(2, "0")).join(" "));
  }
  if (u8.length > max) out.push(indent + `… (${u8.length - max} weitere Byte)`);
  return out.join("\n");
}

window.addEventListener("error", (e) => log("Unexpected error: " + e.message, "err"));
window.addEventListener("unhandledrejection", (e) => log("Unexpected error: " + e.reason, "err"));

/* ---------- Geräteverwaltung ---------- */
// Wichtig: alle Interfaces derselben Tastatur teilen Name, VID und PID.
// Unterschieden wird deshalb über die Collection-Signatur.
function sig(d) {
  return `${d.vendorId}:${d.productId}:${d.productName}:` +
    d.collections.map((c) => `${c.usagePage}/${c.usage}`).join(",");
}

function addDevices(list) {
  let added = 0;
  for (const d of list) {
    if (devices.some((x) => x === d || sig(x) === sig(d))) continue;
    devices.push(d);
    d.addEventListener("inputreport", (e) => {
      if (!ackLogging) return;
      const u8 = new Uint8Array(e.data.buffer);
      log(`<< Input-Report von "${e.device.productName}" (${sigRole(e.device) || "?"}), ID ${hx(e.reportId)}, ${u8.length} Byte:`, "dim");
      log(dump(u8, 64), "dim");
    });
    added++;
  }
  autoAssign();
  render();
  return added;
}

function sigRole(d) {
  const ups = d.collections.map((c) => c.usagePage);
  if (ups.includes(UP_CONTROL)) return "Control";
  if (ups.includes(UP_DATA)) return "Data";
  return null;
}

function autoAssign() {
  devices.forEach((d, i) => {
    const r = sigRole(d);
    if (r === "Control" && $("#ctrlSel").dataset.auto !== "done") { $("#ctrlSel").value = String(i); }
    if (r === "Data" && $("#dataSel").dataset.auto !== "done") { $("#dataSel").value = String(i); }
  });
}

// Report-Länge in Byte aus dem Deskriptor ableiten – nicht raten.
function reportLen(dev, kind, id) {
  for (const c of dev.collections) {
    const arr = kind === "feature" ? c.featureReports : kind === "output" ? c.outputReports : c.inputReports;
    for (const r of arr || []) {
      if ((r.reportId || 0) !== id) continue;
      const bits = (r.items || []).reduce((s, it) => s + (it.reportSize || 0) * (it.reportCount || 0), 0);
      if (bits) return bits / 8;
    }
  }
  return null;
}

function render() {
  const box = $("#devs");
  box.innerHTML = "";
  if (!devices.length) {
    box.innerHTML = '<p class="hint">' + t('no-devices') + '</p>';
  }
  devices.forEach((d, i) => {
    const el = document.createElement("div");
    el.className = "dev";
    const role = sigRole(d);
    const pidKnown = PIDS_WIRED.includes(d.productId);
    let tags = "";
    tags += `<span class="tag ${d.vendorId === VID_AJAZZ ? "ok" : ""}">VID ${hx(d.vendorId, 4)}</span>`;
    tags += `<span class="tag ${pidKnown ? "ok" : "warn"}">PID ${hx(d.productId, 4)}</span>`;
    tags += `<span class="tag ${d.opened ? "ok" : ""}">${d.opened ? t("open") : t("closed")}</span>`;
    if (role) tags += `<span class="tag acc">${role}</span>`;

    let rows = "";
    d.collections.forEach((c) => {
      const n = (a) => (a || []).length;
      rows += `<tr><td>${hx(c.usagePage, 4)}</td><td>${hx(c.usage, 4)}</td>
        <td>${n(c.inputReports)}</td><td>${n(c.outputReports)}</td><td>${n(c.featureReports)}</td></tr>`;
    });

    el.innerHTML = `
      <h3>${esc(d.productName || t("unnamed"))} <span style="color:var(--dim);font-weight:400">#${i}</span></h3>
      <div>${tags}</div>
      <table>
        <tr><th>Usage Page</th><th>Usage</th><th>In</th><th>Out</th><th>Feature</th></tr>
        ${rows || `<tr><td colspan="5" style="color:var(--dim)">${t("no-collections")}</td></tr>`}
      </table>
      <div style="margin-top:10px">
        <button data-act="open" data-i="${i}" class="sec">${d.opened ? t("btn-close") : t("btn-open")}</button>
        <button data-act="ctrl" data-i="${i}" class="sec">→ Control</button>
        <button data-act="data" data-i="${i}" class="sec">→ Data</button>
      </div>`;
    box.appendChild(el);
  });

  box.querySelectorAll("button").forEach((b) => {
    b.onclick = () => handleDevBtn(b.dataset.act, Number(b.dataset.i));
  });

  for (const sel of [$("#ctrlSel"), $("#dataSel")]) {
    const prev = sel.value;
    sel.innerHTML = '<option value=""></option>';
    devices.forEach((d, i) => {
      const o = document.createElement("option");
      o.value = String(i);
      o.textContent = `#${i} ${sigRole(d) || "—"} · ${d.productName || "?"} (${hx(d.productId, 4)})`;
      sel.appendChild(o);
    });
    sel.value = prev;
  }
}

async function handleDevBtn(act, i) {
  const d = devices[i];
  if (act === "open") {
    try {
      if (d.opened) { await d.close(); log(`Device #${i} closed.`, "dim"); }
      else { await d.open(); log(`Device #${i} opened.`, "ok"); }
    } catch (e) { log(`Open/close of #${i} failed: ${e.name}: ${e.message}`, "err"); }
    render();
  } else if (act === "ctrl") { $("#ctrlSel").value = String(i); $("#ctrlSel").dataset.auto = "done"; log(`Device #${i} set as control.`, "dim"); }
  else if (act === "data") { $("#dataSel").value = String(i); $("#dataSel").dataset.auto = "done"; log(`Device #${i} set as data.`, "dim"); }
}

function selected(which) {
  const v = $(which === "ctrl" ? "#ctrlSel" : "#dataSel").value;
  return v === "" ? null : devices[Number(v)];
}

async function ensureOpen(d) {
  if (!d.opened) { await d.open(); log(`"${d.productName}" (${sigRole(d) || "?"}) opened.`, "dim"); }
}

/* ---------- Auswahl ---------- */
async function doPick(filters, label) {
  try {
    log(`Opening device picker (${label}) …`);
    const list = await navigator.hid.requestDevice({ filters });
    if (!list.length) { log("Nothing selected.", "warn"); return; }
    const n = addDevices(list);
    log(`${list.length} device(s) returned, ${n} newly added.`, "ok");
    list.forEach(describe);
  } catch (e) { log(`requestDevice failed: ${e.name}: ${e.message}`, "err"); }
}

$("#pick").onclick = () => doPick([], "ohne Filter");
$("#pickVendor").onclick = () => doPick([{ vendorId: VID_AJAZZ }], `vendorId=${hx(VID_AJAZZ, 4)}`);
$("#known").onclick = async () => {
  try {
    const list = await navigator.hid.getDevices();
    log(`getDevices(): ${list.length} already-permitted device(s).`, list.length ? "ok" : "warn");
    addDevices(list);
    list.forEach(describe);
  } catch (e) { log(`getDevices failed: ${e.name}: ${e.message}`, "err"); }
};

function describe(d) {
  log(`Device: "${d.productName}"  VID=${hx(d.vendorId, 4)}  PID=${hx(d.productId, 4)}  → ${sigRole(d) || "no vendor interface"}`, "info");
  d.collections.forEach((c, ci) => {
    log(`  Collection ${ci}: usagePage=${hx(c.usagePage, 4)} usage=${hx(c.usage, 4)}`, "dim");
    const show = (label, arr) => {
      (arr || []).forEach((r) => {
        const bits = (r.items || []).reduce((s, it) => s + (it.reportSize || 0) * (it.reportCount || 0), 0);
        log(`    ${label} id=${hx(r.reportId || 0)} → ${bits / 8} Byte`, "dim");
      });
    };
    show("Input  ", c.inputReports);
    show("Output ", c.outputReports);
    show("Feature", c.featureReports);
  });
  if (d.vendorId === VID_AJAZZ && !PIDS_WIRED.includes(d.productId)) {
    log(`  ⚠︎ Unknown PID ${hx(d.productId, 4)} – possibly wireless/Bluetooth mode.`, "warn");
  }
}
$("#descr").onclick = () => devices.length ? devices.forEach(describe) : log("No devices loaded.", "warn");

/* ---------- Protokoll ---------- */
function cmdPacket(cmd, sub, enable) {
  const p = new Uint8Array(64);
  p[0] = 0x04; p[1] = cmd; p[2] = sub & 0xff; p[8] = enable & 0xff;
  return p;
}
function timeDataPacket(d) {
  const p = new Uint8Array(64);
  p[0] = 0x00; p[1] = 0x01; p[2] = 0x5A;
  p[3] = d.getFullYear() - 2000;
  p[4] = d.getMonth() + 1;
  p[5] = d.getDate();
  p[6] = d.getHours();
  p[7] = d.getMinutes();
  p[8] = d.getSeconds();
  p[9] = 0x00; p[10] = 0x04;
  p[62] = 0xAA; p[63] = 0x55;
  return p;
}
// Byte 0 ist der Modus-Wert selbst (bei hidapi wäre das die Report-ID).
function modeDataPacket(mode, r, g, b, rainbow, brightness, speed, dir) {
  const p = new Uint8Array(64);
  p[0] = mode;
  p[1] = r; p[2] = g; p[3] = b;
  p[8] = rainbow ? 1 : 0;
  p[9] = Math.min(brightness, 5);
  p[10] = Math.min(speed, 5);
  p[11] = dir;
  p[14] = 0x55; p[15] = 0xAA;   // little-endian 0xAA55
  return p;
}
function sleepDataPacket(level) {
  const p = new Uint8Array(64);
  p[8] = level;
  p[62] = 0xAA; p[63] = 0x55;
  return p;
}
function imageCfgPacket(totalChunks, sub) {
  const p = new Uint8Array(64);
  p[0] = 0x04; p[1] = 0x72; p[2] = sub;
  p[8] = totalChunks & 0xff;
  p[9] = (totalChunks >> 8) & 0xff;
  return p;
}

function frame(pkt64) {
  if ($("#variant").value === "hidapi") return { id: pkt64[0], data: pkt64.slice(1) };
  return { id: 0x00, data: pkt64 };
}

async function sendFeature(dev, pkt64, label) {
  const { id, data } = frame(pkt64);
  log(`>> ${label}: sendFeatureReport(id=${hx(id)}, ${data.length} Byte)`, "info");
  log(dump(data), "dim");
  try {
    await dev.sendFeatureReport(id, data);
    log(`   ${label} OK`, "ok");
    return true;
  } catch (e) {
    log(`   ${label} FEHLER: ${e.name}: ${e.message}`, "err");
    const exp = reportLen(dev, "feature", id);
    if (exp && exp !== data.length) log(`   Note: descriptor expects ${exp} bytes for ID ${hx(id)}.`, "warn");
    return false;
  }
}

async function handshake(dev, id = 0x00) {
  try {
    const view = await dev.receiveFeatureReport(id);
    const u8 = new Uint8Array(view.buffer);
    log(`<< Handshake id=${hx(id)}, ${u8.length} bytes:`, "dim");
    log(dump(u8), "dim");
    return u8;
  } catch (e) {
    log(`   Handshake read failed (non-critical): ${e.name}: ${e.message}`, "warn");
    return null;
  }
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function waitInput(dev, ms) {
  return new Promise((resolve) => {
    let done = false;
    const h = (e) => {
      if (done) return;
      done = true; clearTimeout(t); dev.removeEventListener("inputreport", h);
      resolve(new Uint8Array(e.data.buffer));
    };
    const t = setTimeout(() => {
      if (done) return;
      done = true; dev.removeEventListener("inputreport", h); resolve(null);
    }, ms);
    dev.addEventListener("inputreport", h);
  });
}

/* ---------- Zeit ---------- */
$("#timesync").onclick = async () => {
  const dev = selected("ctrl");
  if (!dev) { log("No control device selected.", "warn"); return; }
  try {
    await ensureOpen(dev);
    const now = new Date();
    log(`--- Time sync to ${now.toLocaleString()} ---`, "info");
    if (!(await sendFeature(dev, cmdPacket(0x18, 0x00, 0x01), "START (04 18)"))) return;
    await sleep(40); await handshake(dev);
    if (!(await sendFeature(dev, cmdPacket(0x28, 0x00, 0x01), "TIME_CFG (04 28)"))) return;
    await sleep(40); await handshake(dev);
    if (!(await sendFeature(dev, timeDataPacket(now), "TIME_DATA"))) return;
    await sleep(40);
    if (!(await sendFeature(dev, cmdPacket(0x02, 0x00, 0x00), "SAVE (04 02)"))) return;
    await sleep(100);
    log("--- Time sync complete ---", "ok");
  } catch (e) { log(`Time sync aborted: ${e.name}: ${e.message}`, "err"); }
};

/* ---------- Beleuchtung ---------- */
const LIGHT_MODES = [
  [0x00, ["Off","Aus"]], [0x01, ["Static","Statisch"]], [0x02, ["Key on","Taste an"]], [0x03, ["Key off","Taste aus"]],
  [0x04, ["Glitter","Glitzern"]], [0x05, ["Falling","Fallen"]], [0x06, ["Colourful","Bunt"]], [0x07, ["Breathe","Atmen"]],
  [0x08, ["Spectrum","Spektrum"]], [0x09, ["Outward","Nach außen"]], [0x0A, ["Scroll","Scrollen"]], [0x0B, ["Roll","Rollen"]],
  [0x0C, ["Rotate","Rotieren"]], [0x0D, ["Explode","Explosion"]], [0x0E, ["Launch","Start"]], [0x0F, ["Ripple","Wellen"]],
  [0x10, ["Flow","Fließen"]], [0x11, ["Pulse","Pulsieren"]], [0x12, ["Tilt","Neigen"]], [0x13, ["Shuttle","Shuttle"]],
];
const LI = (v) => (LANG === "de" ? v[1] : v[0]);
{
  const sel = $("#rgbMode");
  LIGHT_MODES.forEach(([v, n]) => {
    const o = document.createElement("option");
    o.value = String(v);
    o.textContent = `${hx(v)} · ${LI(n)}`;
    if (v === 0x01) o.selected = true;
    sel.appendChild(o);
  });
}

/* ---------- Beleuchtungs-Vorschau (Simulation) ---------- */
// AK820 Pro, ISO-DE, 82 Tasten. Breiten in Tasteneinheiten (1u).
// Eintraege: [Beschriftung, Breite] – null als Beschriftung ist eine Luecke.
const GRID_W = 16.5, GRID_H = 6;
const KB_ROWS = [
  [["Esc",1],[null,.25],["F1",1],["F2",1],["F3",1],["F4",1],[null,.25],["F5",1],["F6",1],["F7",1],["F8",1],
   [null,.25],["F9",1],["F10",1],["F11",1],["F12",1],[null,.25],["Entf",1]],
  [["^",1],["1",1],["2",1],["3",1],["4",1],["5",1],["6",1],["7",1],["8",1],["9",1],["0",1],["ß",1],["´",1],["⌫",2]],
  [["⇥",1.5],["Q",1],["W",1],["E",1],["R",1],["T",1],["Z",1],["U",1],["I",1],["O",1],["P",1],["Ü",1],["+",1]],
  [["⇪",1.75],["A",1],["S",1],["D",1],["F",1],["G",1],["H",1],["J",1],["K",1],["L",1],["Ö",1],["Ä",1],["#",1]],
  [["⇧",1.25],["<",1],["Y",1],["X",1],["C",1],["V",1],["B",1],["N",1],["M",1],[",",1],[".",1],["-",1],["⇧",1.75],
   [null,.5],["↑",1]],
  [["Strg",1.25],["Win",1.25],["Alt",1.25],["",6],["AltGr",1.25],["Fn",1.25],["Strg",1.25],["←",1],["↓",1],["→",1]],
];
// Rechte Spalte plus die ISO-Enter-Taste, die zwei Zeilen ueberspannt.
const KB_EXTRA = [
  { label: "↵", x: 13.75, y: 2, w: 1.25, h: 2 },
  { label: "Ende",  x: 15.5, y: 1, w: 1, h: 1 },
  { label: "Bild↑", x: 15.5, y: 2, w: 1, h: 1 },
  { label: "Bild↓", x: 15.5, y: 3, w: 1, h: 1 },
];
// Nicht beleuchtet: Drehregler und das TFT.
const KB_DECOR = [
  { kind: "knob", x: 15.5, y: 0, w: 1, h: 1 },
  { kind: "tft",  x: 15.5, y: 4, w: 1, h: 1 },
];

const KEYS = (() => {
  const out = [];
  const push = (x, y, w, h, label) => out.push({
    x, y, w, h, label,
    cx: (x + w / 2) / GRID_W,
    cy: (y + h / 2) / GRID_H,
    seed: Math.random(),
  });
  KB_ROWS.forEach((row, r) => {
    let x = 0;
    row.forEach(([label, w]) => {
      if (label !== null) push(x, r, w, 1, label);
      x += w;
    });
  });
  KB_EXTRA.forEach((k) => push(k.x, k.y, k.w, k.h, k.label));
  return out;
})();

function hsv(h, s, v) {
  h = ((h % 1) + 1) % 1;
  const i = Math.floor(h * 6), f = h * 6 - i;
  const p = v * (1 - s), q = v * (1 - f * s), t = v * (1 - (1 - f) * s);
  const c = [[v,t,p],[q,v,p],[p,v,t],[p,q,v],[t,p,v],[v,p,q]][i % 6];
  return c.map((n) => Math.round(n * 255));
}
const sawtooth = (x) => { x = ((x % 1) + 1) % 1; return x < 0.5 ? x * 2 : 2 - x * 2; };
const band = (pos, head, width) => Math.max(0, 1 - Math.abs(((pos - head + 1.5) % 1) - 0.5) * 2 / width);
// Deterministischer Pseudo-Zufall, damit die Vorschau nicht bei jedem Frame flackert.
const hash = (a, b) => { const s = Math.sin(a * 127.1 + b * 311.7) * 43758.5453; return s - Math.floor(s); };

function keyLight(mode, k, t, dir, rainbow, base) {
  let v = 1, hue = null;
  const dx = k.cx - 0.5, dy = k.cy - 0.5;
  const dist = Math.hypot(dx, dy * 0.6) * 2;
  const along = (dir === 0) ? k.cx : (dir === 3) ? 1 - k.cx : (dir === 2) ? k.cy : 1 - k.cy;

  switch (mode) {
    case 0x00: v = 0; break;
    case 0x01: v = 1; break;
    case 0x02: v = hash(k.seed, Math.floor(t * 2)) > 0.85 ? 1 : 0.06; break;
    case 0x03: v = hash(k.seed, Math.floor(t * 2)) > 0.85 ? 0.06 : 1; break;
    case 0x04: v = Math.pow(Math.max(0, sawtooth(t * 0.9 + k.seed * 7) * 2 - 1), 3); break;
    case 0x05: v = Math.max(0, 1 - Math.abs(((t * 0.5 + k.seed) % 1) - k.cy) * 6); break;
    case 0x06: hue = k.seed; v = 1; break;
    case 0x07: v = 0.08 + 0.92 * (Math.sin(t * 2) * 0.5 + 0.5); break;
    case 0x08: hue = t * 0.15; v = 1; break;
    case 0x09: v = band(dist, t * 0.4, 0.5); break;
    case 0x0A: v = band(along, t * 0.4, 0.45); break;
    case 0x0B: hue = along - t * 0.25; v = 1; break;
    case 0x0C: hue = Math.atan2(dy, dx) / (Math.PI * 2) + t * 0.2; v = 1; break;
    case 0x0D: {
      const cyc = Math.floor(t * 0.7), ph = (t * 0.7) % 1;
      const ox = hash(cyc, 1), oy = hash(cyc, 2);
      v = band(Math.hypot(k.cx - ox, (k.cy - oy) * 0.6) * 1.6, ph, 0.45) * (1 - ph);
      break;
    }
    case 0x0E: v = Math.max(0, 1 - Math.abs((1 - k.cy) - ((t * 0.5) % 1)) * 5); break;
    case 0x0F: {
      const cyc = Math.floor(t * 0.5), ph = (t * 0.5) % 1;
      const ox = hash(cyc, 3), oy = hash(cyc, 4);
      const d = Math.hypot(k.cx - ox, (k.cy - oy) * 0.6) * 1.6;
      v = Math.max(0, Math.sin((d - ph) * Math.PI * 4)) * (1 - ph);
      break;
    }
    case 0x10: hue = along * 0.8 - t * 0.2; v = 1; break;
    case 0x11: v = 0.1 + 0.9 * Math.max(0, Math.sin(t * 2.4 - k.cx * 4)); break;
    case 0x12: v = band((k.cx + k.cy) / 2, t * 0.4, 0.5); break;
    case 0x13: v = band(along, sawtooth(t * 0.35), 0.4); break;
    default: v = 1;
  }
  if (rainbow && hue === null) hue = k.cx * 0.6 + t * 0.15;
  if (hue !== null) return { rgb: hsv(hue, 1, 1), v };
  return { rgb: base, v };
}

let kbPlaying = true, kbStart = performance.now();
function drawKb(now) {
  const c = $("#kbPreview"), ctx = c.getContext("2d");
  const mode = Number($("#rgbMode").value);
  const hexc = $("#rgbColor").value;
  const base = [parseInt(hexc.slice(1, 3), 16), parseInt(hexc.slice(3, 5), 16), parseInt(hexc.slice(5, 7), 16)];
  const bright = Number($("#rgbBright").value) / 5;
  const speedF = 0.35 + Number($("#rgbSpeed").value) * 0.38;
  const dir = Number($("#rgbDir").value);
  const rainbow = $("#rgbRainbow").checked;
  const t = ((now - kbStart) / 1000) * speedF;

  const pad = 8;
  const unit = (c.width - pad * 2) / GRID_W;
  const rowH = (c.height - pad * 2) / GRID_H;
  ctx.clearRect(0, 0, c.width, c.height);
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  for (const k of KEYS) {
    const { rgb, v } = keyLight(mode, k, t, dir, rainbow, base);
    const a = Math.max(0, Math.min(1, v)) * bright;
    const x = pad + k.x * unit, y = pad + k.y * rowH;
    const w = k.w * unit - 3, h = k.h * rowH - 3;

    // Aussen der Lichtschein, innen die Tastenkappe – so sitzt die Farbe wie beim Original um die Taste.
    ctx.fillStyle = `rgb(${Math.round(rgb[0] * a)},${Math.round(rgb[1] * a)},${Math.round(rgb[2] * a)})`;
    ctx.beginPath(); ctx.roundRect(x + 1.5, y + 1.5, w, h, 6); ctx.fill();

    const inset = Math.min(4, unit * 0.09);
    ctx.fillStyle = "#25282e";
    ctx.beginPath();
    ctx.roundRect(x + 1.5 + inset, y + 1.5 + inset, w - inset * 2, h - inset * 2, 4);
    ctx.fill();

    if (k.label) {
      ctx.fillStyle = "#b9bfc9";
      ctx.font = `${Math.max(9, Math.round(unit * 0.26))}px -apple-system, sans-serif`;
      ctx.fillText(k.label, x + 1.5 + w / 2, y + 1.5 + h / 2);
    }
  }

  for (const d of KB_DECOR) {
    const x = pad + d.x * unit, y = pad + d.y * rowH;
    const w = d.w * unit - 3, h = d.h * rowH - 3;
    if (d.kind === "knob") {
      ctx.strokeStyle = "#4a505c"; ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(x + w / 2, y + h / 2, Math.min(w, h) / 2 - 2, 0, Math.PI * 2);
      ctx.stroke();
    } else {
      ctx.fillStyle = "#0a0c0f";
      ctx.strokeStyle = "#4a505c"; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.roundRect(x + 1.5, y + 1.5, w, h, 3); ctx.fill(); ctx.stroke();
      ctx.fillStyle = "#6a7280";
      ctx.font = `${Math.max(8, Math.round(unit * 0.2))}px ui-monospace, monospace`;
      ctx.fillText("TFT", x + 1.5 + w / 2, y + 1.5 + h / 2);
    }
  }
  if (kbPlaying) requestAnimationFrame(drawKb);
}

$("#kbToggle").onclick = () => {
  kbPlaying = !kbPlaying;
  $("#kbToggle").textContent = kbPlaying ? t("pause-preview") : t("play-preview");
  if (kbPlaying) requestAnimationFrame(drawKb);
};
["rgbMode", "rgbColor", "rgbBright", "rgbSpeed", "rgbDir", "rgbRainbow"].forEach((id) => {
  $("#" + id).addEventListener("input", () => { if (!kbPlaying) requestAnimationFrame((n) => { kbPlaying = true; drawKb(n); kbPlaying = false; }); });
});
requestAnimationFrame(drawKb);

$("#rgbApply").onclick = async () => {
  const dev = selected("ctrl");
  if (!dev) { log("No control device selected.", "warn"); return; }
  const hexc = $("#rgbColor").value;
  const r = parseInt(hexc.slice(1, 3), 16);
  const g = parseInt(hexc.slice(3, 5), 16);
  const b = parseInt(hexc.slice(5, 7), 16);
  const mode = Number($("#rgbMode").value);
  const name = LI((LIGHT_MODES.find((m) => m[0] === mode) || [0, ["?","?"]])[1]);
  try {
    await ensureOpen(dev);
    log(`--- Beleuchtung: ${name} (${hx(mode)}), RGB ${r}/${g}/${b} ---`, "info");
    if (!(await sendFeature(dev, cmdPacket(0x18, 0x00, 0x01), "START (04 18)"))) return;
    await sleep(40); await handshake(dev);
    if (!(await sendFeature(dev, cmdPacket(0x13, 0x00, 0x01), "MODE_CFG (04 13)"))) return;
    await sleep(40); await handshake(dev);
    const pkt = modeDataPacket(mode, r, g, b, $("#rgbRainbow").checked,
      Number($("#rgbBright").value), Number($("#rgbSpeed").value), Number($("#rgbDir").value));
    if (!(await sendFeature(dev, pkt, "MODE_DATA"))) return;
    await sleep(40);
    if (!(await sendFeature(dev, cmdPacket(0x02, 0x00, 0x00), "SAVE (04 02)"))) return;
    await sleep(100);
    log("--- Lighting applied ---", "ok");
  } catch (e) { log(`Lighting aborted: ${e.name}: ${e.message}`, "err"); }
};

/* ---------- Standby ---------- */
$("#sleepApply").onclick = async () => {
  const dev = selected("ctrl");
  if (!dev) { log("No control device selected.", "warn"); return; }
  const lvl = Number($("#sleepTime").value);
  try {
    await ensureOpen(dev);
    log(`--- Standby-Stufe ${lvl} ---`, "info");
    if (!(await sendFeature(dev, cmdPacket(0x18, 0x00, 0x01), "START (04 18)"))) return;
    await sleep(40); await handshake(dev);
    if (!(await sendFeature(dev, cmdPacket(0x17, 0x01, 0x01), "SLEEP_CFG (04 17)"))) return;
    await sleep(40); await handshake(dev);
    if (!(await sendFeature(dev, sleepDataPacket(lvl), "SLEEP_DATA"))) return;
    await sleep(40);
    if (!(await sendFeature(dev, cmdPacket(0x02, 0x00, 0x00), "SAVE (04 02)"))) return;
    log("--- Standby applied ---", "ok");
  } catch (e) { log(`Standby aborted: ${e.name}: ${e.message}`, "err"); }
};

/* ---------- Bild ---------- */
// Ein Offscreen-Canvas fuer die Konvertierung, eines fuer die Anzeige.
const workCanvas = document.createElement("canvas");
workCanvas.width = workCanvas.height = 128;
const workCtx = workCanvas.getContext("2d", { willReadFrequently: true });

// Floyd-Steinberg auf die Zielbittiefe (5/6/5). Verteilt den Quantisierungsfehler
// auf die Nachbarpixel, statt ihn als Streifen stehen zu lassen.
function ditherInPlace(px) {
  const W = 128, H = 128;
  const quant = (v, bits) => { const m = (1 << bits) - 1; return Math.round((v * m) / 255) * (255 / m); };
  const spread = [[1, 0, 7 / 16], [-1, 1, 3 / 16], [0, 1, 5 / 16], [1, 1, 1 / 16]];
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const i = (y * W + x) * 4;
      for (let c = 0; c < 3; c++) {
        const bits = c === 1 ? 6 : 5;
        const old = px[i + c];
        const nw = quant(old, bits);
        px[i + c] = nw;
        const err = old - nw;
        for (const [dx, dy, f] of spread) {
          const nx = x + dx, ny = y + dy;
          if (nx < 0 || nx >= W || ny >= H) continue;
          px[((ny * W + nx) * 4) + c] += err * f;   // Uint8ClampedArray klemmt selbst
        }
      }
    }
  }
}

// Quelle zuschneiden (Versatz + Zoom) und als RGB565 zurueckgeben.
function toRgb565(src, w, h) {
  const zoom = Number($("#zoom").value) / 100;
  const offX = Number($("#cropX").value) / 100;
  const offY = Number($("#cropY").value) / 100;
  const s = Math.min(w, h) / zoom;
  const sx = Math.max(0, Math.min(w - s, (w - s) / 2 * (1 + offX)));
  const sy = Math.max(0, Math.min(h - s, (h - s) / 2 * (1 + offY)));

  workCtx.clearRect(0, 0, 128, 128);
  workCtx.drawImage(src, sx, sy, s, s, 0, 0, 128, 128);
  const px = workCtx.getImageData(0, 0, 128, 128).data;
  if ($("#dither").checked) ditherInPlace(px);

  const out = new Uint8Array(FRAME_PX);
  for (let i = 0, j = 0; i < px.length; i += 4, j += 2) {
    const v = ((px[i] & 0xf8) << 8) | ((px[i + 1] & 0xfc) << 3) | (px[i + 2] >> 3);
    out[j] = v & 0xff;            // little-endian: low byte zuerst
    out[j + 1] = (v >> 8) & 0xff;
  }
  return out;
}

// Rueckwandlung fuer die Vorschau: zeigt die echte Quantisierung statt des Originals.
function rgb565ToImageData(buf) {
  const img = new ImageData(128, 128);
  for (let j = 0, i = 0; j < buf.length; j += 2, i += 4) {
    const v = buf[j] | (buf[j + 1] << 8);
    const r = (v >> 11) & 0x1f, g = (v >> 5) & 0x3f, b = v & 0x1f;
    img.data[i]     = (r << 3) | (r >> 2);
    img.data[i + 1] = (g << 2) | (g >> 4);
    img.data[i + 2] = (b << 3) | (b >> 2);
    img.data[i + 3] = 255;
  }
  return img;
}

let frames = [];        // [{ data: Uint8Array, delayMs: number, img: ImageData }]
let playTimer = null;
let playIdx = 0;
let playing = false;

function stopPreview() {
  clearTimeout(playTimer); playTimer = null; playing = false;
  $("#playToggle").textContent = t("play-preview");
}

function showFrame(i) {
  const ctx = $("#preview").getContext("2d");
  ctx.putImageData(frames[i].img, 0, 0);
  $("#frameInfo").textContent = frames.length > 1
    ? `${t("frame")} ${i + 1}/${frames.length} · ${frames[i].delayMs} ms`
    : t("still");
}

function playPreview() {
  if (frames.length < 2) return;
  playing = true;
  $("#playToggle").textContent = t("pause-preview");
  const step = () => {
    showFrame(playIdx);
    const d = frames[playIdx].delayMs;
    playIdx = (playIdx + 1) % frames.length;
    playTimer = setTimeout(step, d);
  };
  step();
}

$("#playToggle").onclick = () => { if (playing) stopPreview(); else playPreview(); };

// Delay-Kodierung der Firmware: ein Byte je Frame, Einheit 2 ms, Bereich 1..255.
const encodeDelay = (ms) => Math.min(255, Math.max(1, Math.round(ms / 2)));

// Quelle merken, damit Zuschnitt und Dithering ohne neues Laden neu gerechnet werden koennen.
let sourceFile = null;
let sourceCanvas = null;

$("#imgFile").onchange = (ev) => {
  const file = ev.target.files[0];
  if (!file) return;
  sourceFile = file; sourceCanvas = null;
  rebuildFrames();
};

$("#txtApply").onclick = () => {
  const raw = $("#txtLines").value.trim();
  if (!raw) { log("Kein Text eingegeben.", "warn"); return; }
  const lines = raw.split("|").map((s) => s.trim()).filter(Boolean).slice(0, 5);
  const c = document.createElement("canvas");
  c.width = c.height = 128;
  const ctx = c.getContext("2d");
  ctx.fillStyle = $("#txtBg").value;
  ctx.fillRect(0, 0, 128, 128);

  let size = parseInt($("#txtSize").value, 10) || 0;
  if (!size) {
    // Groesste Schrift suchen, bei der alle Zeilen in 118 px Breite und Hoehe passen.
    size = 64;
    while (size > 7) {
      ctx.font = `600 ${size}px -apple-system, Helvetica, sans-serif`;
      const fits = lines.every((l) => ctx.measureText(l).width <= 118) &&
        lines.length * size * 1.2 <= 118;
      if (fits) break;
      size--;
    }
  }
  ctx.font = `600 ${size}px -apple-system, Helvetica, sans-serif`;
  ctx.fillStyle = $("#txtColor").value;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  const lh = size * 1.2;
  const y0 = 64 - ((lines.length - 1) * lh) / 2;
  lines.forEach((l, i) => ctx.fillText(l, 64, y0 + i * lh));

  sourceCanvas = c; sourceFile = null;
  $("#imgFile").value = "";
  log(`Text image created: ${lines.length} line(s), font size ${size} px.`, "ok");
  rebuildFrames();
};

// Zuschnitt und Dithering wirken sofort, aber gedrosselt – Neuberechnung ist teuer.
let rebuildTimer = null;
function scheduleRebuild() {
  $("#cropXv").textContent = $("#cropX").value;
  $("#cropYv").textContent = $("#cropY").value;
  $("#zoomV").textContent = $("#zoom").value + " %";
  clearTimeout(rebuildTimer);
  rebuildTimer = setTimeout(rebuildFrames, 250);
}
["cropX", "cropY", "zoom", "dither"].forEach((id) => $("#" + id).addEventListener("input", scheduleRebuild));

async function rebuildFrames() {
  if (!sourceFile && !sourceCanvas) return;
  const file = sourceFile;
  stopPreview();
  frames = []; pixelData = null; playIdx = 0;
  $("#imgUpload").disabled = true; $("#playToggle").disabled = true;

  const maxFrames = Math.max(1, Math.min(255, parseInt($("#maxFrames").value, 10) || 120));

  try {
    if (sourceCanvas) {
      const data = toRgb565(sourceCanvas, 128, 128);
      frames = [{ data, delayMs: 0, img: rgb565ToImageData(data) }];
      finishFrames("Textbild");
      return;
    }
    // ImageDecoder liefert fertig komponierte Frames inklusive Delays.
    // Faellt fuer Einzelbilder oder aeltere Browser auf createImageBitmap zurueck.
    let decoded = false;
    if ("ImageDecoder" in window) {
      try {
        const dec = new ImageDecoder({ data: await file.arrayBuffer(), type: file.type || "image/gif" });
        await dec.completed;
        const track = dec.tracks.selectedTrack;
        const total = track ? track.frameCount : 1;
        const n = Math.min(total, maxFrames);
        if (total > maxFrames) log(`File has ${total} frames, using the first ${maxFrames}.`, "warn");
        for (let i = 0; i < n; i++) {
          const { image } = await dec.decode({ frameIndex: i });
          const data = toRgb565(image, image.displayWidth, image.displayHeight);
          const delayMs = image.duration ? Math.round(image.duration / 1000) : 100;
          frames.push({ data, delayMs, img: rgb565ToImageData(data) });
          image.close();
        }
        dec.close();
        decoded = frames.length > 0;
      } catch (e) {
        log(`ImageDecoder failed (${e.name}), falling back to single image.`, "warn");
      }
    }
    if (!decoded) {
      const bmp = await createImageBitmap(file);
      const data = toRgb565(bmp, bmp.width, bmp.height);
      frames = [{ data, delayMs: 0, img: rgb565ToImageData(data) }];
      bmp.close();
    }

    finishFrames(file.name);
  } catch (e) {
    log(`Could not read file: ${e.name}: ${e.message}`, "err");
  }
}

function finishFrames(name) {
  if (!frames.length) return;
  pixelData = frames[0].data;
  showFrame(0);
  $("#imgUpload").disabled = false;
  $("#playToggle").disabled = frames.length < 2;

  const chunks = Math.ceil((256 + frames.length * FRAME_PX) / CHUNK);
  const totalMs = frames.reduce((s, f) => s + f.delayMs, 0);
  const enc = frames.map((f) => encodeDelay(f.delayMs));
  const clipped = frames.filter((f, i) => f.delayMs > 0 && Math.abs(enc[i] * 2 - f.delayMs) > 1).length;

  $("#imgInfo").innerHTML =
    `<strong>${esc(name)}</strong> · ${frames.length} ${t("frames-word")} · ` +
    `${(256 + frames.length * FRAME_PX).toLocaleString()} ${t("payload-bytes")} → ` +
    `${chunks} ${t("chunks-of")}` +
    (frames.length > 1 ? ` · ${t("runtime")} ${(totalMs / 1000).toFixed(1)} s` : "");

  log(`"${name}": ${frames.length} Frame(s) → 128×128 RGB565, ${chunks} Chunks.`, "ok");
  if (clipped) log(`${clipped} frame delay(s) shift slightly due to the 2 ms quantisation.`, "warn");
  if (frames.length > 1) playPreview();
}

$("#imgAck").onclick = () => {
  ackLogging = !ackLogging;
  $("#imgAck").textContent = t("ack-log") + (ackLogging ? t("on") : t("off"));
};

$("#imgUpload").onclick = async () => {
  const ctrl = selected("ctrl"), data = selected("data");
  if (!ctrl || !data) { log("Both control and data device must be selected.", "warn"); return; }
  if (!frames.length) { log("No image loaded.", "warn"); return; }
  const mode = $("#imgVariant").value;
  const startEnable = mode === "gohv" ? 0x01 : 0x00;
  const cfgSub      = mode === "gohv" ? 0x02 : 0x03;

  try {
    await ensureOpen(ctrl); await ensureOpen(data);

    // 256-Byte-Frameheader: Byte 0 = Anzahl Frames, danach ein Delay-Byte je Frame, Rest 0xFF.
    const header = new Uint8Array(256).fill(0xff);
    header[0] = frames.length & 0xff;
    if (frames.length === 1) {
      header[1] = 0x00;                        // Standbild: kein Delay
    } else {
      frames.forEach((f, i) => { if (1 + i < 256) header[1 + i] = encodeDelay(f.delayMs); });
    }

    const dataLen = header.length + frames.length * FRAME_PX;
    const totalChunks = Math.ceil(dataLen / CHUNK);
    const payload = new Uint8Array(totalChunks * CHUNK).fill(0xff);
    payload.set(header, 0);
    frames.forEach((f, i) => payload.set(f.data, header.length + i * FRAME_PX));

    const outLen = reportLen(data, "output", 0x00);
    log(`--- Upload (${mode}), ${frames.length} frame(s) ---`, "info");
    log(`Header: ${Array.from(header.slice(0, Math.min(12, frames.length + 1)))
      .map((b) => b.toString(16).toUpperCase().padStart(2, "0")).join(" ")}${frames.length > 11 ? " …" : ""}`, "dim");
    log(`Payload ${payload.length} bytes = ${totalChunks} chunks of ${CHUNK}. ` +
        `Descriptor output length: ${outLen ?? "unknown"}.`, "dim");
    if (outLen && outLen !== CHUNK) log(`⚠︎ Chunk size ${CHUNK} does not match ${outLen} – upload will likely be rejected.`, "warn");

    if (!(await sendFeature(ctrl, cmdPacket(0x18, 0x00, startEnable), "START (04 18)"))) return;
    await handshake(ctrl);
    if (!(await sendFeature(ctrl, imageCfgPacket(totalChunks, cfgSub), `IMAGE_CFG (04 72 ${cfgSub.toString(16)})`))) return;
    await handshake(ctrl);

    // Bei vielen Chunks nicht jede Zeile loggen, sonst ertrinkt das Log.
    const verbose = totalChunks <= 20;
    const t0 = performance.now();
    let missed = 0;
    for (let i = 0; i < totalChunks; i++) {
      const chunk = payload.subarray(i * CHUNK, (i + 1) * CHUNK);
      try {
        await data.sendReport(0x00, chunk);
      } catch (e) {
        log(`Chunk ${i + 1}/${totalChunks} ERROR: ${e.name}: ${e.message}`, "err");
        return;
      }
      const ack = await waitInput(data, 300);
      if (!ack) missed++;
      if (verbose || (i + 1) % 25 === 0 || i === totalChunks - 1 || !ack) {
        log(`Chunk ${i + 1}/${totalChunks} · ACK: ${ack
          ? Array.from(ack.slice(0, 4)).map((b) => b.toString(16).toUpperCase().padStart(2, "0")).join(" ")
          : "none (timeout)"}`, ack ? "ok" : "warn");
      }
    }
    log(`${totalChunks} chunks in ${((performance.now() - t0) / 1000).toFixed(1)} s` +
        (missed ? `, ${missed} without ACK` : ", all acknowledged"), missed ? "warn" : "ok");

    // gohv schliesst mit FINISH ab, AKS075 mit SAVE – nicht mit beidem.
    if (mode === "gohv") {
      if (!(await sendFeature(ctrl, cmdPacket(0xf0, 0x00, 0x01), "FINISH (04 F0)"))) return;
    } else {
      if (!(await sendFeature(ctrl, cmdPacket(0x02, 0x00, 0x00), "SAVE (04 02)"))) return;
    }
    await handshake(ctrl);
    log("--- Upload complete ---", "ok");
  } catch (e) { log(`Upload aborted: ${e.name}: ${e.message}`, "err"); }
};

/* ---------- Roh ---------- */
$("#rawSend").onclick = async () => {
  const type = $("#rawType").value;
  const dev = selected(type === "feature" ? "ctrl" : "data");
  if (!dev) { log(`No ${type === "feature" ? "control" : "data"} device selected.`, "warn"); return; }
  const bytes = $("#rawHex").value.trim().split(/[\s,]+/).filter(Boolean)
    .map((s) => parseInt(s.replace(/^0x/i, ""), 16));
  if (!bytes.length || bytes.some((b) => Number.isNaN(b) || b < 0 || b > 255)) {
    log("Invalid hex input.", "err"); return;
  }
  const id = parseInt($("#rawId").value, 16) || 0;
  const len = reportLen(dev, type, id) || 64;
  const buf = new Uint8Array(len);
  buf.set(bytes.slice(0, len));
  try {
    await ensureOpen(dev);
    log(`>> Roh-${type} an "${dev.productName}" (${sigRole(dev) || "?"}), id=${hx(id)}, ${len} Byte:`, "info");
    log(dump(buf), "dim");
    if (type === "feature") await dev.sendFeatureReport(id, buf);
    else await dev.sendReport(id, buf);
    log("   OK", "ok");
  } catch (e) { log(`   FEHLER: ${e.name}: ${e.message}`, "err"); }
};

$("#readFeat").onclick = async () => {
  const dev = selected("ctrl");
  if (!dev) { log("No control device selected.", "warn"); return; }
  try { await ensureOpen(dev); await handshake(dev, parseInt($("#rawId").value, 16) || 0); }
  catch (e) { log(`Read failed: ${e.name}: ${e.message}`, "err"); }
};

/* ---------- Kommando-Scanner ---------- */
const KNOWN_CMDS = new Map([
  [0x02, "SAVE"], [0x13, "MODE"], [0x17, "SLEEP"], [0x18, "START"],
  [0x28, "TIME"], [0x72, "IMAGE"], [0xf0, "FINISH"],
]);
let scanAbort = false;

const scanCells = (() => {
  const grid = $("#scanGrid");
  const cells = [];
  for (let i = 0; i < 256; i++) {
    const d = document.createElement("div");
    d.style.cssText = "aspect-ratio:1;border-radius:3px;background:#22262d;font-size:9px;" +
      "display:flex;align-items:center;justify-content:center;color:#6a7280;font-family:ui-monospace,monospace";
    d.textContent = i.toString(16).toUpperCase().padStart(2, "0");
    d.title = KNOWN_CMDS.has(i) ? `${hx(i)} – ${KNOWN_CMDS.get(i)}` : hx(i);
    if (KNOWN_CMDS.has(i)) { d.style.background = "#17304f"; d.style.color = "#4f9dff"; }
    grid.appendChild(d);
    cells.push(d);
  }
  return cells;
})();

function markCell(i, state, title) {
  const c = scanCells[i];
  const colors = { ok: ["#16351f", "#4ade80"], none: ["#22262d", "#6a7280"], err: ["#331b1b", "#f87171"] };
  const [bg, fg] = colors[state] || colors.none;
  c.style.background = bg; c.style.color = fg;
  if (title) c.title = title;
}

$("#scanStop").onclick = () => { scanAbort = true; };

$("#scanRun").onclick = async () => {
  if (!$("#scanConfirm").checked) { log("Please confirm the warning first.", "warn"); return; }
  const dev = selected("ctrl");
  if (!dev) { log("No control device selected.", "warn"); return; }
  const from = parseInt($("#scanFrom").value, 16) || 0;
  const to = Math.min(255, parseInt($("#scanTo").value, 16) || 255);
  const delay = Math.max(0, parseInt($("#scanDelay").value, 10) || 30);
  const skipKnown = $("#scanSkip").checked;

  scanAbort = false;
  $("#scanRun").disabled = true; $("#scanStop").disabled = false;
  const hits = [];
  try {
    await ensureOpen(dev);
    log(`--- Command scan ${hx(from)}–${hx(to)} ---`, "info");
    for (let cmd = from; cmd <= to && !scanAbort; cmd++) {
      if (cmd === 0x02) { markCell(cmd, "none", "0x02 SAVE – deliberately skipped"); continue; }
      if (skipKnown && KNOWN_CMDS.has(cmd)) continue;
      try {
        await dev.sendFeatureReport(0x00, cmdPacket(cmd, 0x00, 0x00));
      } catch (e) {
        markCell(cmd, "err", `${hx(cmd)} – send failed: ${e.name}`);
        continue;
      }
      let resp = null;
      try { resp = new Uint8Array((await dev.receiveFeatureReport(0x00)).buffer); } catch { /* keine Antwort */ }
      const echo = resp && resp[0] === 0x04 && resp[1] === cmd;
      if (echo) {
        const flag = resp[3];
        hits.push(cmd);
        markCell(cmd, "ok", `${hx(cmd)} – echo, byte3=${hx(flag)}`);
        log(`${hx(cmd)}: Echo · Byte3=${hx(flag)} · ${Array.from(resp.slice(0, 10))
          .map((b) => b.toString(16).toUpperCase().padStart(2, "0")).join(" ")}`, "ok");
      } else {
        markCell(cmd, "none", `${hx(cmd)} – no echo`);
      }
      if (delay) await sleep(delay);
    }
    log(`--- Scan ${scanAbort ? "aborted" : "finished"}: ${hits.length} unknown command(s) with echo` +
        (hits.length ? ` → ${hits.map((c) => hx(c)).join(", ")}` : "") + " ---",
        hits.length ? "ok" : "info");
  } catch (e) {
    log(`Scan aborted: ${e.name}: ${e.message}`, "err");
  } finally {
    $("#scanRun").disabled = false; $("#scanStop").disabled = true;
  }
};

/* ---------- Kommando-Explorer ---------- */
let expAbort = false;
$("#expStop").onclick = () => { expAbort = true; };

$("#expRun").onclick = async () => {
  const dev = selected("ctrl");
  if (!dev) { log("No control device selected.", "warn"); return; }
  const cmd = parseInt($("#expCmd").value, 16);
  if (Number.isNaN(cmd) || cmd < 0 || cmd > 255) { log("Invalid command.", "err"); return; }
  if (cmd === 0x02) { log("0x02 (SAVE) is not probed – that would write.", "warn"); return; }
  const subMax = Math.min(255, parseInt($("#expSubMax").value, 16) || 8);
  const enMax = Math.min(255, parseInt($("#expEnMax").value, 16) || 3);

  expAbort = false;
  $("#expRun").disabled = true; $("#expStop").disabled = false;
  const groups = new Map();   // Antwort-Hex -> Liste der Kombinationen
  try {
    await ensureOpen(dev);
    log(`--- Explorer ${hx(cmd)}: Byte2 0x00–${hx(subMax)}, Byte8 0x00–${hx(enMax)} ---`, "info");
    for (let sub = 0; sub <= subMax && !expAbort; sub++) {
      for (let en = 0; en <= enMax && !expAbort; en++) {
        let key = "— send failed —";
        try {
          await dev.sendFeatureReport(0x00, cmdPacket(cmd, sub, en));
          const r = new Uint8Array((await dev.receiveFeatureReport(0x00)).buffer);
          key = Array.from(r.slice(0, 12)).map((b) => b.toString(16).toUpperCase().padStart(2, "0")).join(" ");
        } catch (e) {
          key = `— ${e.name} —`;
        }
        if (!groups.has(key)) groups.set(key, []);
        groups.get(key).push(`${hx(sub)}/${hx(en)}`);
        await sleep(20);
      }
    }

    const rows = [...groups.entries()].sort((a, b) => b[1].length - a[1].length);
    $("#expOut").innerHTML =
      `<table><tr><th>${t("response")}</th><th>${t("count")}</th><th>Byte2/Byte8</th></tr>` +
      rows.map(([k, v]) =>
        `<tr><td style="font-family:ui-monospace,monospace">${esc(k)}</td><td>${v.length}</td>` +
        `<td style="color:var(--dim)">${v.slice(0, 14).join(", ")}${v.length > 14 ? " …" : ""}</td></tr>`
      ).join("") + `</table>`;

    log(`--- Explorer ${expAbort ? "aborted" : "finished"}: ${rows.length} distinct response(s) ---`,
        rows.length > 1 ? "ok" : "info");
    if (rows.length === 1) log("All combinations return the same – these bytes appear to be ignored.", "dim");
  } catch (e) {
    log(`Explorer aborted: ${e.name}: ${e.message}`, "err");
  } finally {
    $("#expRun").disabled = false; $("#expStop").disabled = true;
  }
};

/* ---------- Profil ---------- */
const PROFILE_FIELDS = [
  ["rgbMode", "value"], ["rgbColor", "value"], ["rgbBright", "value"], ["rgbSpeed", "value"],
  ["rgbDir", "value"], ["rgbRainbow", "checked"], ["sleepTime", "value"], ["imgVariant", "value"],
  ["maxFrames", "value"], ["cropX", "value"], ["cropY", "value"], ["zoom", "value"],
  ["dither", "checked"], ["txtLines", "value"], ["txtColor", "value"], ["txtBg", "value"],
  ["txtSize", "value"], ["variant", "value"], ["autoSyncMin", "value"],
];

$("#profSave").onclick = () => {
  const data = { tool: "ak820-debug", version: 1, saved: new Date().toISOString(), settings: {} };
  PROFILE_FIELDS.forEach(([id, prop]) => { data.settings[id] = $("#" + id)[prop]; });
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `ak820-profil-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(a.href);
  log("Profile saved.", "ok");
};

$("#profLoadBtn").onclick = () => $("#profLoad").click();
$("#profLoad").onchange = async (ev) => {
  const f = ev.target.files[0];
  if (!f) return;
  try {
    const data = JSON.parse(await f.text());
    if (data.tool !== "ak820-debug") throw new Error("Keine Profildatei dieses Tools");
    let n = 0;
    PROFILE_FIELDS.forEach(([id, prop]) => {
      if (data.settings && id in data.settings) { $("#" + id)[prop] = data.settings[id]; n++; }
    });
    scheduleRebuild();
    log(`Profile loaded: ${n} setting(s) from ${data.saved || "unknown date"}.`, "ok");
  } catch (e) {
    log(`Could not read profile: ${e.message}`, "err");
  }
  ev.target.value = "";
};

/* ---------- Auto-Sync und Startsequenz ---------- */
let autoTimer = null;
function updateAutoSync() {
  clearInterval(autoTimer); autoTimer = null;
  if (!$("#autoSync").checked) { $("#autoSyncInfo").textContent = ""; return; }
  const min = Math.max(1, parseInt($("#autoSyncMin").value, 10) || 30);
  autoTimer = setInterval(() => {
    if (!selected("ctrl")) { log("Auto sync skipped: no control device.", "warn"); return; }
    log("Auto sync triggered.", "dim");
    $("#timesync").click();
  }, min * 60000);
  $("#autoSyncInfo").textContent = `${t("auto-active")} ${min} ${t("auto-next")} ` +
    new Date(Date.now() + min * 60000).toLocaleTimeString("de-DE");
}
$("#autoSync").onchange = updateAutoSync;
$("#autoSyncMin").onchange = updateAutoSync;

$("#runSequence").onclick = async () => {
  if (!selected("ctrl")) { log("No control device selected.", "warn"); return; }
  log("=== Start sequence ===", "info");
  await $("#timesync").onclick();
  await sleep(200);
  await $("#rgbApply").onclick();
  await sleep(200);
  if (frames.length && selected("data")) {
    await $("#imgUpload").onclick();
  } else {
    log("No image loaded or no data device – upload skipped.", "dim");
  }
  log("=== Start sequence finished ===", "ok");
};

/* ---------- Tastenbelegung per hidutil ---------- */
// HID Usage Page 0x07 = Tastatur, 0x0C = Consumer (Medientasten).
const USAGES = [
  [["Home","Pos1 / Home"], 7, 0x4a], [["End","Ende"], 7, 0x4d], [["Page Up","Bild↑"], 7, 0x4b],
  [["Page Down","Bild↓"], 7, 0x4e], [["Delete","Entf"], 7, 0x4c], [["Insert","Einfg"], 7, 0x49],
  [["Esc","Esc"], 7, 0x29], [["Caps Lock","Feststell"], 7, 0x39], [["Tab","Tab"], 7, 0x2b], [["Backspace","Rückschritt"], 7, 0x2a],
  [["Enter","Enter"], 7, 0x28], [["Space","Leertaste"], 7, 0x2c], [["Menu","Menü"], 7, 0x65],
  [["Print Screen","Druck"], 7, 0x46], [["Scroll Lock","Rollen"], 7, 0x47], [["Pause","Pause"], 7, 0x48],
  [["Arrow left","Pfeil links"], 7, 0x50], [["Arrow right","Pfeil rechts"], 7, 0x4f], [["Arrow up","Pfeil hoch"], 7, 0x52], [["Arrow down","Pfeil runter"], 7, 0x51],
  [["Left Cmd","Linke Cmd"], 7, 0xe3], [["Right Cmd","Rechte Cmd"], 7, 0xe7], [["Left Alt","Linke Alt"], 7, 0xe2], [["Right Alt","Rechte Alt"], 7, 0xe6],
  [["Left Ctrl","Linke Ctrl"], 7, 0xe0], [["Right Ctrl","Rechte Ctrl"], 7, 0xe4],
  ...Array.from({ length: 12 }, (_, i) => [[`F${i + 1}`, `F${i + 1}`], 7, 0x3a + i]),
  ...Array.from({ length: 8 }, (_, i) => [[`F${i + 13} (freely assignable)`, `F${i + 13} (frei belegbar)`], 7, 0x68 + i]),
  [["Media: play/pause","Medien: Play/Pause"], 0x0c, 0xcd], [["Media: next track","Medien: nächster Titel"], 0x0c, 0xb5],
  [["Media: previous track","Medien: vorheriger Titel"], 0x0c, 0xb6], [["Media: mute","Medien: stumm"], 0x0c, 0xe2],
  [["Media: volume up","Medien: lauter"], 0x0c, 0xe9], [["Media: volume down","Medien: leiser"], 0x0c, 0xea],
];

const usageValue = (page, usage) => "0x" + page.toString(16) + usage.toString(16).padStart(8, "0");

{
  const fill = (sel, list) => list.forEach(([name, page, usage], i) => {
    const o = document.createElement("option");
    o.value = String(USAGES.indexOf(list[i]));
    o.textContent = LI(name);
    sel.appendChild(o);
  });
  fill($("#mapSrc"), USAGES);
  fill($("#mapDst"), USAGES);
  $("#mapSrc").value = String(USAGES.findIndex(([, p, u]) => p === 7 && u === 0x4a));
  $("#mapDst").value = String(USAGES.findIndex(([, p, u]) => p === 7 && u === 0x68));
}

let mappings = [];

function renderMappings() {
  const box = $("#mapList");
  if (!mappings.length) {
    box.innerHTML = '<p class="hint">' + t("no-mapping") + '</p>';
  } else {
    box.innerHTML = `<table><tr><th>${t("from")}</th><th>${t("to")}</th><th></th></tr>` +
      mappings.map((m, i) =>
        `<tr><td>${LI(USAGES[m.src][0])}</td><td>${LI(USAGES[m.dst][0])}</td>` +
        `<td><button data-del="${i}" class="sec" style="padding:2px 8px;margin:0">${t("remove")}</button></td></tr>`
      ).join("") + "</table>";
    box.querySelectorAll("button[data-del]").forEach((b) => {
      b.onclick = () => { mappings.splice(Number(b.dataset.del), 1); renderMappings(); };
    });
  }
  $("#mapCmd").textContent = buildCommand();
}

function matchArg() {
  return $("#mapScoped").checked ? ` --matching '{"VendorID":3141,"ProductID":32778}'` : "";
}

function buildCommand(empty = false) {
  const pairs = empty ? [] : mappings.map((m) => {
    const [, sp, su] = USAGES[m.src];
    const [, dp, du] = USAGES[m.dst];
    return `{"HIDKeyboardModifierMappingSrc":${usageValue(sp, su)},` +
           `"HIDKeyboardModifierMappingDst":${usageValue(dp, du)}}`;
  });
  return `hidutil property${matchArg()} --set '{"UserKeyMapping":[${pairs.join(",")}]}'`;
}

$("#mapAdd").onclick = () => {
  const src = Number($("#mapSrc").value), dst = Number($("#mapDst").value);
  if (src === dst) { log("Source and target are identical.", "warn"); return; }
  if (mappings.some((m) => m.src === src)) { log("This key already has a mapping.", "warn"); return; }
  mappings.push({ src, dst });
  renderMappings();
};
$("#mapScoped").onchange = renderMappings;

$("#mapCopy").onclick = async () => {
  if (!mappings.length) { log("No mapping defined.", "warn"); return; }
  try { await navigator.clipboard.writeText(buildCommand()); log("Command copied – paste it into Terminal.", "ok"); }
  catch { log("Kopieren fehlgeschlagen – Text manuell markieren.", "warn"); }
};

$("#mapReset").onclick = async () => {
  try {
    await navigator.clipboard.writeText(buildCommand(true));
    log("Reset command copied – clears all mappings for this device.", "ok");
  } catch { log("Copy failed.", "warn"); }
};

$("#mapPlist").onclick = () => {
  if (!mappings.length) { log("No mapping defined.", "warn"); return; }
  const args = ["property"];
  if ($("#mapScoped").checked) args.push("--matching", '{"VendorID":3141,"ProductID":32778}');
  const pairs = mappings.map((m) => {
    const [, sp, su] = USAGES[m.src];
    const [, dp, du] = USAGES[m.dst];
    return `{"HIDKeyboardModifierMappingSrc":${usageValue(sp, su)},"HIDKeyboardModifierMappingDst":${usageValue(dp, du)}}`;
  });
  args.push("--set", `{"UserKeyMapping":[${pairs.join(",")}]}`);
  const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const plist = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key>
  <string>de.local.ak820.keymap</string>
  <key>ProgramArguments</key>
  <array>
    <string>/usr/bin/hidutil</string>
${args.map((a) => "    <string>" + esc(a) + "</string>").join("\n")}
  </array>
  <key>RunAtLoad</key>
  <true/>
</dict>
</plist>
`;
  const blob = new Blob([plist], { type: "application/xml" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "de.local.ak820.keymap.plist";
  a.click();
  URL.revokeObjectURL(a.href);
  log("Startup file created – move it to ~/Library/LaunchAgents/ and load it.", "ok");
};

renderMappings();

/* ---------- Tasten-Monitor ---------- */
// event.code → HID Usage auf Page 0x07. Basis der offiziellen Usage-Tabelle.
const CODE_TO_USAGE = (() => {
  const m = {
    Escape: 0x29, Enter: 0x28, Tab: 0x2b, Space: 0x2c, Backspace: 0x2a,
    Minus: 0x2d, Equal: 0x2e, BracketLeft: 0x2f, BracketRight: 0x30, Backslash: 0x31,
    Semicolon: 0x33, Quote: 0x34, Backquote: 0x35, Comma: 0x36, Period: 0x37, Slash: 0x38,
    CapsLock: 0x39, PrintScreen: 0x46, ScrollLock: 0x47, Pause: 0x48,
    Insert: 0x49, Home: 0x4a, PageUp: 0x4b, Delete: 0x4c, End: 0x4d, PageDown: 0x4e,
    ArrowRight: 0x4f, ArrowLeft: 0x50, ArrowDown: 0x51, ArrowUp: 0x52,
    ContextMenu: 0x65, IntlBackslash: 0x64,
    ControlLeft: 0xe0, ShiftLeft: 0xe1, AltLeft: 0xe2, MetaLeft: 0xe3,
    ControlRight: 0xe4, ShiftRight: 0xe5, AltRight: 0xe6, MetaRight: 0xe7,
  };
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").forEach((c, i) => { m["Key" + c] = 0x04 + i; });
  "1234567890".split("").forEach((d, i) => { m["Digit" + d] = 0x1e + i; });
  for (let i = 1; i <= 12; i++) m["F" + i] = 0x39 + i;        // F1 = 0x3A
  for (let i = 13; i <= 24; i++) m["F" + i] = 0x68 + (i - 13); // F13 = 0x68
  return m;
})();

let kmLast = null;
const kmHistory = [];

function kmRender(ev) {
  const usage = CODE_TO_USAGE[ev.code];
  const idx = usage === undefined ? -1 : USAGES.findIndex(([, p, u]) => p === 7 && u === usage);
  kmLast = { code: ev.code, usage, idx };
  $("#kmUse").disabled = idx < 0;

  $("#kmBig").innerHTML =
    `<div style="font-size:26px;font-weight:600;color:var(--acc)">${esc(ev.code || t("no-code"))}</div>` +
    `<div style="margin-top:8px;color:var(--fg)">key: <strong>${esc(ev.key === " " ? "Space" : ev.key)}</strong>` +
    `　·　keyCode: ${ev.keyCode}　·　location: ${ev.location}</div>` +
    `<div style="margin-top:6px;color:${usage === undefined ? "var(--warn)" : "var(--ok)"}">` +
    (usage === undefined
      ? t("no-usage")
      : `HID usage page 0x07, usage ${hx(usage)} → hidutil ${usageValue(7, usage)}` +
        (idx < 0 ? t("not-in-list") : "")) + `</div>`;

  kmHistory.unshift(`${esc(ev.code)}  ·  key="${esc(ev.key)}"  ·  ${usage === undefined ? "—" : usageValue(7, usage)}`);
  kmHistory.length = Math.min(kmHistory.length, 8);
  $("#kmList").innerHTML = `<table><tr><th>${t("last-pressed")}</th></tr>` +
    kmHistory.map((h) => `<tr><td style="font-family:ui-monospace,monospace">${h}</td></tr>`).join("") + "</table>";
}

window.addEventListener("keydown", (ev) => {
  if (!$("#kmOn").checked) return;
  if (ev.repeat) return;
  if ($("#kmPrevent").checked) ev.preventDefault();
  kmRender(ev);
}, true);

$("#kmOn").onchange = () => {
  if ($("#kmOn").checked) {
    log("Key monitor on – input fields will no longer respond normally.", "warn");
  } else {
    log("Key monitor off.", "dim");
  }
};

$("#kmUse").onclick = () => {
  if (!kmLast || kmLast.idx < 0) return;
  $("#mapSrc").value = String(kmLast.idx);
  log(`"${kmLast.code}" set as the source key below.`, "ok");
  $("#mapSrc").scrollIntoView({ behavior: "smooth", block: "center" });
};

// Consumer- (0x000C) und herstellerspezifische (0xFFFF) Interfaces liefern Medientasten,
// Fn-Ebene und moeglicherweise den Drehregler.
$("#kmWatch").onclick = async () => {
  const targets = devices.filter((d) =>
    d.collections.some((c) => c.usagePage === 0x000c || c.usagePage === 0xffff));
  if (!targets.length) { log("No matching interfaces loaded – connect the keyboard first.", "warn"); return; }
  ackLogging = true;
  $("#imgAck").textContent = t("ack-log") + t("on");
  for (const d of targets) {
    try {
      await ensureOpen(d);
      log(`Watching "${d.productName}" (${d.collections.map((c) => hx(c.usagePage, 4)).join(", ")}).`, "ok");
    } catch (e) {
      log(`Could not open interface: ${e.name}: ${e.message}`, "err");
    }
  }
  log("Now press media keys, Fn combinations or turn the knob.", "info");
};

/* ---------- Log-Tools ---------- */
$("#copy").onclick = async () => {
  try { await navigator.clipboard.writeText(logEl.innerText); log("Log copied.", "ok"); }
  catch { log("Copy failed – please select the text manually.", "warn"); }
};
$("#clear").onclick = () => { logEl.innerHTML = ""; };

/* ---------- Start ---------- */
if (!("hid" in navigator)) {
  $("#nohid").style.display = "block";
  document.querySelectorAll("button").forEach((b) => { if (b.id !== "copy" && b.id !== "clear") b.disabled = true; });
  log("navigator.hid unavailable – see the notice above.", "err");
} else {
  log(`Ready. Origin: ${location.origin} | secure context: ${window.isSecureContext}`, "ok");
  navigator.hid.addEventListener("connect", (e) => {
    log(`+ HID connected: "${e.device.productName}" ${hx(e.device.vendorId, 4)}/${hx(e.device.productId, 4)}`, "ok");
    addDevices([e.device]);
  });
  navigator.hid.addEventListener("disconnect", (e) => log(`- HID disconnected: "${e.device.productName}"`, "warn"));
  navigator.hid.getDevices().then((l) => {
    if (l.length) { log(`${l.length} already-permitted interface(s) found.`, "ok"); addDevices(l); l.forEach(describe); }
    else render();
  });
}
// Der englische Originaltext jedes Textknotens wird einmal festgehalten,
// damit beim Zurückschalten nichts verlorengeht.
const TEXT_NODES = [];
(function snapshot() {
  const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let n;
  while ((n = w.nextNode())) {
    if (n.parentNode && /^(SCRIPT|STYLE)$/.test(n.parentNode.nodeName)) continue;
    if (n.nodeValue && n.nodeValue.trim().length > 1) TEXT_NODES.push([n, n.nodeValue]);
  }
})();
const PLACEHOLDERS = [...document.querySelectorAll("[placeholder]")].map((e) => [e, e.placeholder]);

function applyLang() {
  for (const [node, orig] of TEXT_NODES) {
    const m = orig.match(/^(\s*)([\s\S]*?)(\s*)$/);
    const key = m[2].replace(/\s+/g, " ");
    const de = DE_UI[key];
    node.nodeValue = (LANG === "de" && de) ? m[1] + de + m[3] : orig;
  }
  for (const [el, orig] of PLACEHOLDERS) {
    el.placeholder = (LANG === "de" && DE_UI[orig]) ? DE_UI[orig] : orig;
  }
  document.documentElement.lang = LANG;

  // Von JavaScript erzeugte Inhalte neu aufbauen
  const keepMode = $("#rgbMode").value, keepSrc = $("#mapSrc").value, keepDst = $("#mapDst").value;
  $("#rgbMode").innerHTML = "";
  LIGHT_MODES.forEach(([v, n]) => {
    const o = document.createElement("option");
    o.value = String(v); o.textContent = `${hx(v)} · ${LI(n)}`;
    $("#rgbMode").appendChild(o);
  });
  $("#rgbMode").value = keepMode;
  for (const sel of [$("#mapSrc"), $("#mapDst")]) {
    sel.innerHTML = "";
    USAGES.forEach((u, i) => {
      const o = document.createElement("option");
      o.value = String(i); o.textContent = LI(u[0]);
      sel.appendChild(o);
    });
  }
  $("#mapSrc").value = keepSrc; $("#mapDst").value = keepDst;

  $("#kbToggle").textContent = kbPlaying ? t("pause-preview") : t("play-preview");
  $("#playToggle").textContent = playing ? t("pause-preview") : t("play-preview");
  $("#imgAck").textContent = t("ack-log") + (ackLogging ? t("on") : t("off"));
  render(); renderMappings(); updateAutoSync(); updateConnStatus();
  if (frames.length) { showFrame(playIdx % frames.length); }
}

$("#langSel").onchange = () => { LANG = $("#langSel").value; applyLang(); };

/* ---------- Reiter und Statusanzeige ---------- */
document.querySelectorAll("nav button").forEach((b) => {
  b.onclick = () => {
    document.querySelectorAll("nav button").forEach((x) => x.classList.remove("active"));
    document.querySelectorAll(".tab").forEach((x) => x.classList.remove("active"));
    b.classList.add("active");
    document.getElementById("tab-" + b.dataset.tab).classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
});

function updateConnStatus() {
  const el = $("#connStatus");
  if (!el) return;
  const ctrl = selected("ctrl"), data = selected("data");
  let text, on = false;
  if (!devices.length) text = t("not-connected");
  else if (ctrl && data) { text = t("connected"); on = true; }
  else if (ctrl) text = t("no-data-ch");
  else text = devices.length + " " + t("ifaces");
  el.innerHTML = '<span class="dot"></span>' + text;
  el.className = "pill" + (on ? " on" : "");
}
setInterval(updateConnStatus, 800);
applyLang();
