---
tag: JBZTMHSGW1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261645
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_1,a_2,...$ be a strictly increasing sequence of positive real numbers such that $a_1 = 1$,$a_2 = 4$, and that for every positive integer $k$, the subsequence $a_{4k-3}$,$a_{4k-2}$,$a_{4k-1}$,$a_{4k}$ is geometric and the subsequence $a_{4k-1}$,$a_{4k}$,$a_{4k+1}$,$a_{4k+2}$ is arithmetic. For each positive integer $k$, let rk be the common ratio of the geometric sequence $a_{4k-3}$,$a_{4k-2}$,$a_{4k-1}$,$a_{4k}$. Compute
$$\sum_{k=1}^{\infty} (r_k -1)(r_{k+1} -1)$$
