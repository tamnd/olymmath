---
tag: 1P3RYZ8Z2V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=82285
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We are given a sequence of integers $\left(p_{n}\right)$ such that for all $n \geq 2, p_{n}$ is the largest prime divisor of $p_{n-1}+p_{n-2}+2016$. Show that there exists a real number $M$ such that for all $n \geq 0$, $p_{n} \leq M$.
