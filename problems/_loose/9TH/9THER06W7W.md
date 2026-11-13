---
tag: 9THER06W7W
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=215747
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A sequence of numbers $a_1, a_2 , \dots a_m$ is a *geometric sequence modulo n of length m* for $n,m \in \mathbb{Z}^+$ if for every index $i$, $a_i \in \{ 0, 1, 2, \dots , m-1\}$ and there exists an integer $k$ such that $n | a_{j+1} - ka_{j}$ for $1 \leq j \leq m-1$. How many geometric sequences modulo $14$ of length $14$ are there?
