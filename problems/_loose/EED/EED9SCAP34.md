---
tag: EED9SCAP34
kind: problem
type: answer
answer: (6,1,1)(-\frac{2}{3},\frac{13}{3},-\frac{1}{9})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154379
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all real solutions of the following nonlinear system:
$$
\begin{aligned}
x+4 y+6 z & =16 \\
x+6 y+12 z & =24 \\
x^{2}+4 y^{2}+36 z^{2} & =76
\end{aligned}
$$
