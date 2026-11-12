---
tag: 6C2WD2ATPH
kind: problem
type: answer
answer: P_{96}\approx6.285429,p_{96}\approx6.282064
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=54642
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider a circle of radius 1. Describe a regular $n$-sided polygon around it and inscribe a regular $n$-sided polygon in it. Denote their perimeters by $P_{n}$ (for the circumscribed) and $p_{n}$ (for the inscribed).

a) Find $P_{4}, p_{4}, P_{6}$, and $p_{6}$.

b) Prove that the following recurrence relations hold: $ P_{2 n}=\frac{2 P_{n} p_{n}}{P_{n}+p_{n}}, p_{2 n}=\sqrt{p_{n} P_{2 n}}$ $(n \geq 3)$.

c) Find $P_{96}$ and $p_{96}$. Prove the inequalities $3^{10} / 71 < \pi < 3^{1} / 7$.
