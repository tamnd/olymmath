---
tag: 495GTMTQMQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263957
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n>1$ be an integer. There are $n$ orangutoads, conveniently numbered $1,2,\dots{},n$, each sitting at an integer position on the number line. They take turns moving in the order $1,2,\dots{},n$, and then going back to $1$ to start the process over; they stop if any orangutoad is ever unable to move. To move, an orangutoad chooses another orangutoad who is at least $2$ units away from her towards them by a a distance of $1$ unit. (Multiple orangutoads can be at the same position.) Show that eventually some orangutoad will be unable to move.
