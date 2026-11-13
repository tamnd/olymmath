---
tag: 1HSAWMNA54
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250578
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $(F_n )_{n\ge o}$ be the sequence of Fibonacci numbers: $F_0 = 0$, $F_1 = 1$ and $F_{n+2} = F_{n+1}+F_n$ , for every $n \ge 0$.
Prove that for any prime $p \ge 3$, $p$ divides $F_{2p} - F_p$ .
