---
tag: MCWZ5EEV5T
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=164902
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Among 100 children, we want to draw a gift by tossing a biased coin multiple times. The coin is tossed $k$ times, and for each outcome of the toss sequence, we determine who wins in that case.

Prove that by appropriately choosing the probability $p$ of a "head" and the value of $k$, the $2^{k}$ outcomes can be distributed among the children in such a way that everyone has an equal probability of winning.
