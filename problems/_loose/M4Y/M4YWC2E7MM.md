---
tag: M4YWC2E7MM
kind: problem
type: answer
answer: (n!)^{2}\cdot2^{n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91447
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a natural number. A volleyball team consisting of $n$ women and $n$ men lines up for a game. Each team member occupies one of the positions $1,2, \ldots, 2 n$, whereby exactly positions 1 and $n+1$ are outside the court. During the game, all team members rotate, switching from position $i$ to position $i+1$ (or from $2 n$ to 1). How many possibilities are there for the starting line-up so that there are always at least $n-1$ women on the pitch, no matter how often the team rotates?

Note: Two starting line-ups are different if at least one team member occupies a different position.
