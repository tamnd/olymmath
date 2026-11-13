---
tag: ZHAVRQ1BXH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=120803
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n>1$ be an odd number. Find the smallest positive integer $m$ with the property: for any $m$ integers $a_{1}, \ldots, a_{m}$, there is an $n$-element subset $M \subset\{1,2, \ldots, m\}$, and $n$ integers $x_{1}, \ldots, x_{n}$ coprime with $n$, such that
$$
\sum_{i \in M} a_{i} x_{i} \equiv 0(\bmod n)
$$
