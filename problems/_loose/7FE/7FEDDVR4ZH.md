---
tag: 7FEDDVR4ZH
kind: problem
type: answer
answer: 2021 \cdot 2022
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=264635
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $r_1, r_2, ..., r_{2021}$ be the not necessarily real and not necessarily distinct roots of $x^{2022} + 2021x = 2022$. Let $S_i = r_i^{2021}+2022r_i$ for all $1 \le i \le 2021$. Find $\left|\sum^{2021}_{i=1} S_i \right| = |S_1 +S_2 +...+S_{2021}|$.
