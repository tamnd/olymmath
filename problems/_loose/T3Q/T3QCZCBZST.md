---
tag: T3QCZCBZST
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=216186
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $d(n)$ be the number of positive divisors of a positive integer $n$. Let $\mathbb{N}$ be the set of all positive integers. Say that a bijection $F$ from $\mathbb{N}$ to $\mathbb{N}$ is *divisor-friendly* if $d(F(mn)) = d(F(m)) d(F(n))$ for all positive integers $m$ and $n$. (Note: A bijection is a one-to-one, onto function.) Does there exist a divisor-friendly bijection? Prove or disprove.
