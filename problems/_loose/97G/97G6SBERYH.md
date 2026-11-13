---
tag: 97G6SBERYH
kind: problem
type: answer
answer: f\left(\prod_{i} p_{i}^{a_{i}}\right) = \prod_{i} p_{G(i)}^{H(a_{i})I(p_{i})}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240895
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f : \mathbb N \to \mathbb N$ such that:

i) $f^{2000}(m)=f(m)$ for all $m \in \mathbb N$,

ii) $f(mn)=\dfrac{f(m)f(n)}{f(\gcd(m,n))}$, for all $m,n\in \mathbb N$, and

iii) $f(m)=1$ if and only if $m=1$.
