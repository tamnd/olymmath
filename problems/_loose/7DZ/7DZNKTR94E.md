---
tag: 7DZNKTR94E
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267893
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S$ be the set of real numbers $k$ with the following property: for all set of real numbers $(a,b,c)$ satisfying $ab+bc+ca=1$, we always have the inequality:$$\frac{a}{{\sqrt {{a^2} + ab + {b^2} + k} }} + \frac{b}{{\sqrt {{b^2} + bc + {c^2} + k} }} + \frac{c}{{\sqrt {{c^2} + ca + {a^2} + k} }} \ge \sqrt {\frac{3}{{k + 1}}} .$$
a) Assume that $k\in S$. Prove that: $k\ge 2$.
b) Prove that: $2\in S$.
