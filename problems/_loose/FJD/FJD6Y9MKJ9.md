---
tag: FJD6Y9MKJ9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209090
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $(a_n )_{n\ge 1}$ be a sequence of integers that satisﬁes
$$a_n = a_{n-1} -\text{min}(a_{n-2} , a_{n-3} )$$
for all $n \ge 4$. Prove that for every positive integer $k$, there is an $n$ such that $a_n$ is divisible by $3^k$ .
