---
tag: M51NM1V2YV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=145560
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For any given positive integer $n$, any $2 n+1$ non-zero integers (not necessarily distinct) $a_{0}, a_{1}, \cdots, a_{2 n}$, we have
$$
a_{0}+a_{1}+\cdots+a_{2 n} \neq 0 \text {. }
$$

Is it always true that there exists a permutation $i_{1}, i_{2}, \cdots, i_{2 n+1}$ of $0,1,2, \cdots, 2 n$ such that the polynomial $\sum_{k=1}^{2 n+1} a_{i_{k}} x^{k-1}$ has no integer roots?
