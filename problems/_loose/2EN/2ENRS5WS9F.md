---
tag: 2ENRS5WS9F
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=182825
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a quadruple $\left(p_{1} ; p_{2} ; p_{3} ; p_{4}\right)$ of prime numbers $p_{i}$ that satisfy the following conditions:

1. The $p_{i}$ are at least three digits (in the decimal system).
2. It is $p_{2}=p_{1}+m ; p_{3}=p_{2}+m, p_{4}=p_{3}+m$ with $m \in \mathbb{N}, m \geq 1$.
3. The highest digits of $m$ are all divisible by $m$ without remainder.

Prove that then:

$$
m! \mid 2\left(p_{4}^{2}-p_{1}^{2}\right)
$$
