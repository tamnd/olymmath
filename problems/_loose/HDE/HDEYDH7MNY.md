---
tag: HDEYDH7MNY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=233795
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the sequence $\{a_n\}$ defined so that $a_n$ is the leftmost digit of $2^n$. The first few terms of this sequence are $1,2,4,8,1,3,6,\dots$. For how many $0\le n\le100000$ is $a_n=1$? If $C$ is the correct answer and $A$ is your answer, then your score will be rounded up from $\max\left(0,25-\tfrac{1}{6}\sqrt{|A-C|}\right)$.
