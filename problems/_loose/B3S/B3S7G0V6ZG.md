---
tag: B3S7G0V6ZG
kind: problem
type: answer
answer: (3,3,3),(-4,-4,-4),(1,1,11),(1,11,1),(11,1,1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=8453
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all triples of real numbers $(u ; v ; w)$, satisfying the system of equations:

$$
\left\{\begin{array}{l}
u+v \cdot w=12 \\
v+w \cdot u=12 \\
w+u \cdot v=12
\end{array}\right.
$$
