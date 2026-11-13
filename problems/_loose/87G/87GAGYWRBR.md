---
tag: 87GAGYWRBR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231594
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a positive integer $k$, let $p(k)$ be the smallest prime that does not divide $k$. Given a positive integer $a$, define the infinite sequence $a_0, a_1, \ldots$ by $a_0 = a$ and, for $n > 0$, $a_n$ is the smallest positive integer with the following properties:

• $a_n$ has not yet appeared in the sequence, that is, $a_n \neq a_i$ for $0 \leq i < n$;

• $(a_{n-1})^{a_n} - 1$ is a multiple of $p(a_{n-1})$.

Prove that every positive integer appears as a term in the sequence, that is, for every positive integer $m$ there is $n$ such that $a_n = m$.
