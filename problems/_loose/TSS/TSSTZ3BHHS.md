---
tag: TSSTZ3BHHS
kind: problem
type: answer
answer: -abc,++ca,-(+b+)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=38159
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a, b, c$ be pairwise distinct numbers. Solve the system of equations

$$
\left\{\begin{array}{l}
x + a y + a^{2} z + a^{3} = 0 \\
x + b y + b^{2} z + b^{3} = 0 \\
x + c y + c^{2} z + c^{3} = 0
\end{array}\right.
$$
