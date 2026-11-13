---
tag: 2MPDP0JJAP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=203568
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose $q_1,q_2,...$ is an infinite sequence of integers satisfying the following two conditions:
(a) $m - n$ divides $q_m - q_n$ for $m>n \geq 0$
(b) There is a polynomial $P$ such that $|q_n|<P(n)$ for all $n$.
Prove that there is a polynomial $Q$ such that $q_n = Q(n)$ for each $n$.
