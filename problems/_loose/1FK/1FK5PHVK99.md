---
tag: 1FK5PHVK99
kind: problem
type: answer
answer: (1,1),(1,2),(2,1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=81281
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all integers $m, n \geq 1$ such that $m n$ divides $3^{m}+1$ and $m n$ divides $3^{n}+1$.

Let's finish with some algebraic results concerning the order. For integers $a, n$ we denote $a \wedge n$ the GCD of $a$ and $n$.

Proposition 6. Let $a, b, n$ be integers with $a \wedge n=1$ and $b \wedge n=1$. Suppose that $\omega(a) \wedge \omega(b)=$ 1. Then $\omega(a b)=\omega(a) \omega(b)$.
