---
tag: AKSRNM8WWA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=109761
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For the Fibonacci number $F_{n}$, prove:
(1) $\binom{11}{10}^{n+1}=\left(\begin{array}{ll}F_{n+1} & F_{n} \\ F_{n} & F_{n-1}\end{array}\right)$.
(2) $F_{n+1} \cdot F_{n-1}-F_{n}^{2}=(-1)^{n+1}$.
(3) $F_{n}$ and $F_{n+1}$ are coprime.
