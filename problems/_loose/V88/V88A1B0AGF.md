---
tag: V88A1B0AGF
kind: problem
type: answer
answer: n = 4, 9
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217353
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $g:\mathbb{N} \to \mathbb{N}$ with $g(n)$ being the product of the digits of $n$.

(a) Prove that $g(n) \le n$ for all $n\in \mathbb{N}$

(b) Find all $n\in \mathbb{N}$ for which $n^2-12n+36=g(n)$
