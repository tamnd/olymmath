---
tag: P4KCYPKD4D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239633
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n > 2$ and $n$ lamps numbered $1, 2, ..., n$ be connected in cyclic order: $1$ to $2, 2$ to $3, ..., n-1$ to $n, n$ to $1$. At the beginning all lamps are off. If the switch of a lamp is operated, the lamp and its $2$ neighbors change status: off to on, on to off. Prove that if $3$ does not divide $n$, then (all the) $2^n$ configurations can be reached and if $3$ divides $n$, then $2^{n-2}$ configurations can be reached.
