---
tag: N7KBQBZ1VB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=101177
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given two sequences $\left\{x_{n}\right\},\left\{y_{n}\right\}$ satisfying $x_{0}=y_{0}=1, x_{n}=\frac{x_{n-1}}{2+x_{n-1}}(n \geq 1)$, $y_{n}=\frac{y_{n-1}^{2}}{1+2 y_{n-1}}(n \geq 1)$. Prove that for any natural number $\mathrm{n}$, there exists a natural number $j_{n}$, such that
$$
y_{n}=x_{j_{n}} \text { . }
$$
