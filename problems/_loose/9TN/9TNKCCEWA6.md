---
tag: 9TNKCCEWA6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250638
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given two non-constant polynomials $P(x),Q(x)$ with real coefficients. For a real number $a$, we define
$$P_a= \{z \in C : P(z) = a\}, Q_a =\{z \in C : Q(z) = a\}$$ Denote by $K$ the set of real numbers $a$ such that $P_a = Q_a$.
Suppose that the set $K$ contains at least two elements, prove that $P(x) = Q(x)$.
