---
tag: EGD2P81QH7
kind: problem
type: answer
answer: (x,y,u,v)=(1,2,2,1),(4,1,1,2),(1,4,5,1),(2,1,1,1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=122755
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all positive integer solutions $(x, y, u, v)$ for the equation
$$
\left|2^{x} \cdot 3^{y}-2^{u} \cdot 5^{v}\right|=2
$$
