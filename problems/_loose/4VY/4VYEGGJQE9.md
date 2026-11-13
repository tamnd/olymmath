---
tag: 4VYEGGJQE9
kind: problem
type: answer
answer: P
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=79553
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S$ be the function that associates to a natural number $n$ the sum of its digits. Find all polynomials with integer coefficients $P$ such that

$$
\forall n \geqslant 2016, P(n)>0 \text { and } S(P(n))=P(S(n))
$$

(IMO SL 2016 N1)
