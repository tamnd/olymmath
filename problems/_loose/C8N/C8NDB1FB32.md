---
tag: C8NDB1FB32
kind: problem
type: answer
answer: \binom{n+k-1}{k}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=164600
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that for any positive integers $n, k$

$$
\sum_{i_{1}=1}^{n} \sum_{i_{2}=1}^{i_{1}} \sum_{i_{3}=1}^{i_{2}} \cdots \sum_{i_{k}=1}^{i_{k-1}} 1=\binom{n+k-1}{k}
$$
