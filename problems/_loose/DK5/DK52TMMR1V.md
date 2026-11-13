---
tag: DK52TMMR1V
kind: problem
type: answer
answer: (n, d) = \{(1, 0), (3, 2)\}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263952
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find, with proof, all pairs of positive integers $(n,d)$ with the following property: for every integer $S$, there exists a unique non-decreasing sequence of $n$ integers $a_1,a_2,...,a_n$ such that $a_1 + a_2 + ... + a_n = S$ and $a_n-a_1=d.$
