[![make.fun · u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27](https://make.fun/badge/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27.svg)](https://make.fun/bounty/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27?utm_source=github&utm_medium=readme&utm_campaign=u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27)
[![make.fun · u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27 · rank](https://make.fun/badge/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27/Junior-Coding-ID/fix-human-sleep-patch-note/rank.svg)](https://make.fun/bounty/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27)
[![make.fun · u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27 · reward](https://make.fun/badge/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27/Junior-Coding-ID/fix-human-sleep-patch-note/reward.svg)](https://make.fun/bounty/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27)

# Fix Human Sleep: Funniest Patch Note

Entry untuk bounty [Fix Human Sleep: Funniest Patch Note](https://make.fun/bounty/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27) — satu baris patch note yang mengumumkan tidur manusia sudah diperbaiki.

## Jawaban

```
v2.0: Fixed human sleep. Dreams now autosave, nightmares moved to a separate folder, snooze button finally negotiable.
```

118 karakter, satu baris, ASCII.

## Cara kerja

`main.ts` (Node-only, tanpa dependensi) memvalidasi jawaban — panjang tepat 118 karakter, satu baris, ASCII saja, tanpa spasi di ujung — lalu menulisnya byte-per-byte ke `entry.txt` di direktori `process.env.MAKEFUN_OUTPUT` (default `/output`), dan membaca balik file tersebut untuk verifikasi sebelum selesai.

Jalankan:

```sh
node main.ts
```
