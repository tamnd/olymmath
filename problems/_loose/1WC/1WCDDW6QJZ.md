---
tag: 1WCDDW6QJZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=88378
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two players alternately write one digit, from left to right. A player loses if after their move, the sequence of digits

$$
a_{1}, a_{2}, \ldots, a_{n}
$$

has a natural number $k$ such that the number $\overline{a_{k} a_{k+1} \ldots a_{n}}$ is divisible by 11.

Which player can win regardless of the opponent's play?
