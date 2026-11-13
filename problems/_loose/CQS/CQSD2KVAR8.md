---
tag: CQSD2KVAR8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204481
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n>3$ be an integer. Integers $a_1, \dots, a_n$ are given so that $a_k\in \{k, -k\}$ for all $1\leq k\leq n$. Prove that there is a sequence of indices $1\leq k_1, k_2, \dots, k_n\leq n$, not necessarily distinct, for which the sums
$$a_{k_1}$$
$$a_{k_1}+a_{k_2}$$
$$a_{k_1}+a_{k_2}+a_{k_3}$$
$$\vdots$$
$$a_{k_1}+a_{k_2}+\cdots+a_{k_n}$$
have distinct residues modulo $2n+1$, and so that the last one is divisible by $2n+1$.
