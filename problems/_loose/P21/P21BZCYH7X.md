---
tag: P21BZCYH7X
kind: problem
type: answer
answer: "2"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248254
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all positive integers $n{}$ for which there exist pairwise distinct integers $a_1,\ldots,a_n{}$ and $b_1,\ldots, b_n$ such that $$\prod_{i=1}^n(a_k^2+a_ia_k+b_i)=\prod_{i=1}^n(b_k^2+a_ib_k+b_i)=0, \forall k=1,\ldots,n.$$
