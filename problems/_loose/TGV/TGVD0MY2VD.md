---
tag: TGVD0MY2VD
kind: problem
type: answer
answer: \frac{n}{k}\binom{n-k+k-1}{k-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91169
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \geq 4$ and $k, d \geq 2$ be natural numbers with $k \cdot d \leq n$. The $n$ participants in the Mathematical Olympiad are sitting around a round table waiting for Patrick. When Patrick shows up, he doesn't like the situation at all, as the rules of social distancing are not being observed. So he selects $k$ of the $n$ participants who are allowed to stay and sends everyone else out of the room so that there are at least $d-1$ empty seats between every two of the remaining $k$ participants. How many opportunities does Patrick have to do this, assuming all seats were initially occupied?
