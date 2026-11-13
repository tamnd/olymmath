---
tag: RETS0HP2ZM
kind: problem
type: answer
answer: (1,3,1)(2,3,\frac{1}{2})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=162782
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all triples of real numbers $(x, y, z)$ that satisfy the system of equations

$$
\begin{aligned}
x^{2}+y^{2}+4 z^{2} & =6 y-4 \\
2 x y-4 x z+4 y z & =y^{2}+5
\end{aligned}
$$
