---
tag: 3RSKAJCSCD
kind: problem
type: answer
answer: (1,3,1),(-1,3,-1),(1,-3,-1),(-1,-3,1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=68794
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Solve the system of equations:

$$
\left\{\begin{array}{l}
\frac{x^{2}+y^{2}-z^{2}}{x y}=\frac{3}{z} \\
\frac{y^{2}+z^{2}-x^{2}}{x y}=\frac{3}{x} \\
\frac{y^{2}-x^{2}-z^{2}}{x z}=\frac{21}{y}
\end{array}\right.
$$
