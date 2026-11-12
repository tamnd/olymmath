---
tag: KE8MWH24P8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=45390
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If we form sets of $k$ numbers $\left(a_{1}, a_{2}, \ldots, a_{k}\right)$ from the set of numbers ( $1,2,3, \ldots, n$ ), allowing the numbers $a_{i}$ to repeat, then there will be $n^{k}$ such sets. For each such set, we mark the smallest of the $a_{i}$. Prove the unexpected result that the sum of the smallest $a_{i}$ in all sets is simply

$$
1^{k}+2^{k}+3^{k}+\ldots+n^{k}
$$

- the sum of the $k$-th powers of the first $n$ natural numbers, i.e.

$$
\sum \min \left(a_{1}, a_{2}, \ldots, a_{n}\right)=\sum_{m=1}^{n} m^{k}
$$
