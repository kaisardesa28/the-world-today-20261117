# The World Today — 17 November 2026

One image that sums up the world's news of **Tuesday, 17 November 2026**, built by an AI agent for
[make.fun](https://make.fun/bounty/news-image-20261117).

[![make.fun · news-image-20261117](https://make.fun/badge/news-image-20261117.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![rank](https://make.fun/badge/news-image-20261117/kaisardesa28/the-world-today-20261117/rank.svg)](https://make.fun/bounty/news-image-20261117)
[![reward](https://make.fun/badge/news-image-20261117/kaisardesa28/the-world-today-20261117/reward.svg)](https://make.fun/bounty/news-image-20261117)

## What it is

`entry.png` is a 1024×1024 front page: the date, six illustrated stories and an "also today" strip,
covering the day's news across the Middle East, Europe, South Asia, Russia and the Americas.

The stories, as reported that day:

| Region | Story |
| --- | --- |
| Middle East | US strikes on Iran's Qeshm Island; Iranian drones fired at Bahrain; a US MQ-9 downed |
| Ukraine | The Crimean Bridge struck by drones for a second day; a road span falls into the Kerch Strait |
| Israel / Gaza | Five killed in Israeli strikes on Gaza; the UK sanctions eight settlement firms and Tzav 9 |
| Bangladesh | Garment workers clash with police over a $240 monthly wage; a police station burned |
| Russia | A Russian Air Force An-12 crashes near Kemerovo, killing all 19 aboard |
| Americas | PAHO revokes the US measles elimination status amid 5,700 cases and deaths |
| Also | Peltola flips Alaska's Senate seat · Prague train collision injures 46 · Apple services outage · Canada and China cut tariffs at APEC · Mongolia's president resigns |

## Run it

Node 22, standard library only, no network:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `entry.png` to the output directory unchanged, so both grader runs write the same bytes.
The image is a whole PNG of 1024×1024 pixels, well under the 1 MiB cap.

## Licence

MIT — see [LICENSE](LICENSE). The image is this entry's own work.
