---
tag: E1PEC3M3JW
kind: problem
type: answer
answer: k2k-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=121048
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a two-way infinite sequence of non-negative integers $\left\{a_{n}\right\}_{-\infty}^{+\infty}$, where only a finite number of terms are greater than 0. For a given positive integer $k$, a term $a_{n}$ is called a good term if there exists a positive integer $m$ such that the arithmetic mean of $a_{n}, a_{n+1}, \cdots, a_{n+m-1}$ is not less than $k$.
(1) Prove: There are only a finite number of good terms in the sequence;
(2) Try to find the maximum and minimum possible values of the arithmetic mean of all good terms.
