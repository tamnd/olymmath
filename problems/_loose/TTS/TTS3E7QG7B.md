---
tag: TTS3E7QG7B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=4080
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=151257
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hmmt/2011
    source: hf-numina-olympiads
    label: HMMT February
---
Sarah and Hagar play a game of darts. Let $O_{0}$ be a circle of radius 1. On the $n$th turn, the player whose turn it is throws a dart and hits a point $p_{n}$ randomly selected from the points of $O_{n-1}$. The player then draws the largest circle that is centered at $p_{n}$ and contained in $O_{n-1}$, and calls this circle $O_{n}$. The player then colors every point that is inside $O_{n-1}$ but not inside $O_{n}$ her color. Sarah goes first, and the two players alternate turns. Play continues indefinitely. If Sarah's color is red, and Hagar's color is blue, what is the expected value of the area of the set of points colored red?
