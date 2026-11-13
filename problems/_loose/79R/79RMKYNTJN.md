---
tag: 79RMKYNTJN
kind: problem
type: answer
answer: 3^{674}\cdot2022
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=87987
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The initial term of the sequence $\left(a_{n}\right)$ is $a_{0}=2022$. For each $n \in \mathbb{N}$, the number $a_{n}$ is equal to the sum of the number $a_{n-1}$ and its largest divisor smaller than itself. Determine $a_{2022}$.
