---
tag: CNQSPNNDWR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85276
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all triples $(x, y, z)$ of real (but not necessarily positive) numbers that satisfy

$$
\begin{aligned}
3\left(x^{2}+y^{2}+z^{2}\right) & =1, \\
x^{2} y^{2}+y^{2} z^{2}+z^{2} x^{2} & =x y z(x+y+z)^{3}
\end{aligned}
$$
