---
tag: 57PMH9BQA1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217466
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given positive integers $n$ and $k$, say that $n$ is $k$-*solvable* if there are positive integers $a_1$, $a_2$, ..., $a_k$ (not necessarily distinct) such that
$$
\frac{1}{a_1} + \frac{1}{a_2} + \cdots + \frac{1}{a_k} = 1
$$
and
$$
a_1 + a_2 + \cdots + a_k = n.
$$
Prove that if $n$ is $k$-solvable, then $42n + 12$ is $(k + 3)$-solvable.
