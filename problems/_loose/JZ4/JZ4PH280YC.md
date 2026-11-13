---
tag: JZ4PH280YC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263991
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_1$ be any positive integer. For all $i$, write $5^{2020}$ times $a_i$ in base $10$, replace each digit with its remainder when divided by $2$, read off the result in binary, and call that $a_{i+1}$. Prove that $a_N = a_{N+2^{2020}}$ for all sufficiently large $N$.
