---
tag: 283QBGMBMM
kind: problem
type: answer
answer: 3^{k+1} \mid a_{3^k}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250750
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the sequence $a_1 = 3$ and $a_{n + 1} =\frac{3a_n^2+1}{2}-a_n$ for $n = 1 ,2 ,...$.
Prove that if $n$ is a power of $3$ then $n$ divides $a_n$ .
