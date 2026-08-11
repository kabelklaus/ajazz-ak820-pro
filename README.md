# AJAZZ AK820 Pro Studio

A browser-based configurator for the AJAZZ AK820 Pro mechanical keyboard. Set the RGB lighting,
push images and animated GIFs to the 128 × 128 TFT screen, sync the clock, configure standby —
and generate the macOS commands to remap a key. No installation, no driver, no account.

**Live: https://kabelklaus.github.io/ajazz-ak820-pro/**

The interface is available in English and German.

---

## Requirements

| | |
|---|---|
| **Browser** | Chrome, Edge, Arc or Opera (any Chromium ≥ 89). Safari and Firefox do not implement WebHID. |
| **Connection** | USB-C in **wired** mode. The vendor HID interfaces are not exposed over Bluetooth or the 2.4 GHz dongle. |
| **Cable** | A data cable. Charge-only USB-C cables will power the keyboard but carry no data. |
| **OS** | Any. The key-remapping section is macOS-specific; everything else works everywhere. |

If the device picker says "No compatible devices found", it is almost always the mode switch or
the cable — see [Troubleshooting](#troubleshooting).

---

## Features

### Lighting
All 20 effects, colour, brightness, speed, direction and the rainbow flag. A simulated keyboard
preview shows the effect on the actual AK820 Pro layout before anything is sent to the device.

### Screen
- Static images (PNG, JPEG, WebP), centre-cropped and scaled to 128 × 128
- Animated GIFs with per-frame timing preserved
- Text rendering directly in the tool — no external image editor needed
- Adjustable crop offset and zoom
- Optional Floyd–Steinberg dithering, which noticeably reduces the banding RGB565 produces on gradients
- The preview is rendered from the converted RGB565 data, so what you see is what the keyboard gets

### Clock
Manual sync plus an optional automatic refresh while the page is open.

### Standby
The four sleep steps the firmware supports: never, 1, 5 and 30 minutes.

### Key remapping (macOS)
The keyboard's firmware has no remapping command, so this is handled by macOS instead. The tool
generates a ready-to-paste `hidutil` command scoped to this keyboard's vendor and product ID, so
your built-in keyboard stays untouched. It can also produce a LaunchAgent file to make the mapping
survive a restart.

A key monitor shows what the browser actually receives for each key — useful because some AK820 Pro
units ship with a mislabelled keycap (see [Known quirks](#known-quirks)).

### Expert tools
Device and descriptor inspection, raw packet sender, a command scanner that sweeps the vendor
command space, a command explorer that groups responses by parameter, and a full hex log.

---

## Security

This tool talks to a USB device, so it is worth being explicit about what it does and does not do.

**No network access at all.** The page makes no HTTP requests, opens no sockets, loads no fonts,
no analytics and no third-party scripts. Everything — image decoding, colour conversion, HID
transport — happens locally in the browser. This is enforced, not just promised: the page ships a
Content Security Policy with `default-src 'none'` and `connect-src 'none'`, so the browser blocks
any outbound request even if one were introduced by accident.

**No inline scripts or event handlers.** All JavaScript lives in `app.js`, which lets the CSP use
`script-src 'self'` without the `unsafe-inline` escape hatch that would otherwise defeat the point.

**Untrusted input is escaped.** Device names come from the USB descriptor and file names come from
the file picker — neither is under the page's control. Both are HTML-escaped before being rendered,
as are keyboard event codes. A device advertising itself as `<img src=x onerror=…>` is displayed as
literal text.

**No storage.** No cookies, no `localStorage`, no IndexedDB. Nothing is persisted between visits
unless you explicitly export a profile as a JSON file.

**No `eval`, no `Function` constructor**, no dynamic code execution of any kind.

**Device access is explicit and revocable.** WebHID requires you to pick the device in Chrome's own
dialog; a page cannot enumerate devices on its own. Chrome remembers the grant per origin — revoke
it any time at `chrome://settings/content/hid`.

**The generated `hidutil` command is yours to review.** The tool prints it in full and copies it to
the clipboard; it never runs anything on your machine. Read it before you paste it.

### What this tool can still do to your keyboard

Writing to a device always carries some risk. The everyday functions (lighting, image, clock,
standby) use documented command sequences and are safe in normal use. The **command scanner** in
the Expert tab is different: it sends undocumented commands to see which ones the firmware
acknowledges. It deliberately never sends `0x02` (SAVE) so nothing is written to flash by accident,
but a residual risk remains. It is behind a confirmation checkbox for that reason.

---

## Compatibility

| Field | Value |
|---|---|
| Vendor ID | `0x0C45` (Microdia / Sonix) |
| Product ID | `0x8009` or `0x800A`, depending on revision |
| Control interface | Usage page `0xFF13`, 64-byte feature reports |
| Data interface | Usage page `0xFF68`, 4096-byte output reports |

**If your keyboard reports `0x800A`, other AK820 tools may not find it.** Several existing
configurators filter on `0x8009` only and silently report "no compatible device". This tool accepts
both and, in the Expert tab, can list every HID device without any filter so you can see what your
unit actually reports.

Hardware, for reference: HFD80CP100 MCU (a Sonix SN32F299 clone), WCH CH582F Bluetooth module,
16 MB PY25Q128HA SPI flash, 0.85″ 128 × 128 GC9107 display.

---

## Known quirks

**The right-hand column keycap may be wrong.** On some German ISO units the key below `Entf` is
printed **Ende** but actually sends **Home** (`0x4A`). Use the key monitor in the Key remapping tab
to check yours before remapping it.

**Two image framings exist.** The reverse-engineering projects disagree on three bytes of the image
upload sequence. The AKS075 framing is the default and matches this keyboard's 4096-byte output
report; the gohv framing is selectable under Advanced options if uploads misbehave.

**Key remapping in firmware is not possible.** No QMK port exists for the AK820 Pro — the SonixQMK
compatibility list covers only the Ajazz AK33 — and no remapping command has been reverse-engineered.
This is why remapping is done at the OS level.

---

## Troubleshooting

**The device picker is empty.**
1. The mode switch on the underside must be on **wired**. The firmware only exposes the vendor
   interfaces in that mode, and it evaluates the switch at boot — so unplug, wait, plug back in.
2. Try a different USB-C cable. Charge-only cables are common and the keyboard will light up on one,
   which makes them easy to mistake for working.
3. Plug directly into the computer, not through a hub or dock.
4. Use the Expert tab's unfiltered device list to see whether the keyboard appears at all.

**Everything works, then stops after unplugging.** Chrome's grant is tied to the device instance.
Reconnect and pick the device again.

**Permissions are forgotten on every reload.** You are opening the file via `file://`, which has an
opaque origin Chrome cannot attach permissions to. Use the hosted version, or serve the folder over
`http://localhost`.

---

## Running it locally

Clone the repository and open `index.html` in Chrome. That works, but permissions will not persist
(see above). For a proper origin:

```bash
python3 -m http.server 8765
# then open http://127.0.0.1:8765/
```

There is no build step, no dependencies and no package manager. Two files:

```
index.html   markup, styles, Content Security Policy
app.js       everything else — protocol, image pipeline, UI, translations
```

---

## Protocol notes

The vendor protocol uses 64-byte feature reports on the control interface, framed as
`04 <command> <sub> 00×5 <flag> 00×55`. The firmware echoes known commands back with byte 3 set to
`0x01`, which is what the command scanner exploits.

| Command | Meaning |
|---|---|
| `0x18` | START |
| `0x13` | Lighting mode config |
| `0x17` | Sleep config |
| `0x28` | Time config |
| `0x72` | Image config |
| `0x02` | SAVE |
| `0xF0` | FINISH |

Image data goes to the data interface as 4096-byte output reports: a 256-byte frame header
(frame count, then one delay byte per frame in units of 2 ms) followed by 32768 bytes of RGB565 per
frame, little-endian, padded with `0xFF`.

---

## Credits

The protocol was not reverse-engineered here. This tool builds on the work of:

- [Beattrey/ajazz-ak820-config](https://github.com/Beattrey/ajazz-ak820-config) — WebHID configurator and consolidated protocol notes
- [gohv/EPOMAKER-Ajazz-AK820-Pro](https://github.com/gohv/EPOMAKER-Ajazz-AK820-Pro) — time sync, lighting and image upload for the AK820 Pro
- [aar-rafi/aks075-linux](https://github.com/aar-rafi/aks075-linux) — image and GIF framing on the sibling AKS075
- [TaxMachine/ajazz-keyboard-software-linux](https://github.com/TaxMachine/ajazz-keyboard-software-linux) — AK820 Pro control reports
- [fpb/ajazz-ak820-pro](https://github.com/fpb/ajazz-ak820-pro) — board-level teardown, key matrix and chip identification

Not affiliated with AJAZZ or EPOMAKER. Use at your own risk.

## License

MIT — see [LICENSE](LICENSE).
