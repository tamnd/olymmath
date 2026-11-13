---
tag: X6CDX5T2F5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242533
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let there be a sequence $a_n$ such that $a_1 = 2,a_2 = 0, a_3 = 1, a_4 = 0$, and for $n \ge 1, a_{n+4}$ is the remainder
when $a_n + 2a_{n+1} + 3a_{n+2} + 4a_{n+3}$ is divided by $9$. Prove that there are no positive integer $k$ such that
$a_k = 0, a_{k+1} = 1, a_{k+2} = 0,a_{k+3} = 2$.
