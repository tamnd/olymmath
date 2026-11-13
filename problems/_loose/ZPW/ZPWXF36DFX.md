---
tag: ZPWXF36DFX
kind: problem
type: answer
answer: "9660000"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=87979
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A natural number $\overline{a_{1} a_{2} \ldots a_{m}}$ (with $a_{1} \neq 0$) is concise if the number $\overline{a_{i} a_{i+1} \ldots a_{i+k-1}}$ is divisible by $k$ for all natural numbers $i, k$ such that $1 \leqslant k \leqslant m$ and $1 \leqslant i \leqslant m-k+1$.

For example, the number 102 is concise because the numbers 1, 0, and 2 are divisible by 1, the numbers 10 and $2(=\overline{02})$ are divisible by 2, and the number 102 is divisible by 3.

Prove that there exists a largest concise natural number and determine it.
