---
tag: SBWYJENWQ2
kind: problem
type: answer
answer: 10^{-300}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=20690
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence is defined by the initial conditions $x_{1}=1, x_{2}=1.5, x_{3}=2$ and the relation $x_{n}=\frac{x_{n-1}}{2}+\frac{x_{n-2}}{4}+\frac{x_{n-3}}{4}$. Prove that $x_{1001}$ and $x_{1000}$ differ by less than $10^{-300}$.
