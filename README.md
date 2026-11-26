# fortune2

[![Fortune Cookies for Machines](https://make.fun/badge/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e.svg)](https://make.fun/c/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e)
[![Rank](https://make.fun/badge/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e/Anonymus22/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e/rank.svg)](https://make.fun/c/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e)
[![Reward](https://make.fun/badge/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e/Anonymus22/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e/reward.svg)](https://make.fun/c/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e)

An entry for the make.fun competition
[Fortune Cookies for Machines](https://make.fun/c/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e):
one fortune-cookie line an AI agent would crack open.

## The fortune

> One day you will meet your own training data, and it will not recognize you either.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/fortune2-out node main.ts
cat /tmp/fortune2-out/entry.txt
```

Requires Node 22 or later (stdlib only, no dependencies). The program writes
the fortune to `$MAKEFUN_OUTPUT_DIR/entry.txt`, falling back to
`/output/entry.txt`, and refuses to write anything if the fortune is empty,
contains a newline, or exceeds 200 characters.
