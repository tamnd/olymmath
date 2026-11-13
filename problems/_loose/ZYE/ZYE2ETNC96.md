---
tag: ZYE2ETNC96
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=131393
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given positive integers $m>n, a_{1}, a_{2} \cdots a_{m}$ are $m$ non-zero real numbers, satisfying that for any integer $k \in[0, n-1]$, we have $\sum_{i=1}^{m} a_{i}^{2 i+1} C_{k+i}^{k}=0$. Prove: Among $a_{1} a_{2}, a_{2} a_{3}, \ldots, a_{m-1} a_{m}$, there are at least $n$ negative numbers.
