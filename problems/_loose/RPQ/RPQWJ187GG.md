---
tag: RPQWJ187GG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241701
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer. A and B play a game with $n$ cards.
First, A writes one integer on each of $n$ cards. After that, B repeats the following operations.

Choose two cards and let the integers written on them be $a$ and $b$.
Erase both numbers written on the chosen card and write $a-b$ on one card and $b-a$ on the other card.

The goal of B is to make the numbers written on all cards $0$ after a finite number of operations.

(1) Show that when $n=3$, A can write integers so that B cannot achieve its goal.
(2) Show that when $n=4$, B can always achieve its goal regardless of how A is written.
