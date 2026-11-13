---
tag: MK0J1CNG33
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237546
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For any positive integer $n$ and real numbers $a_i>0$ ($i=1,2,...,n$), prove that
$$\sum_{k=1}^n \frac{k}{a_1^{-1}+a_2^{-1}+...+a_k^{-1}}\leq 2\sum_{k=1}^n a_k.$$

Discuss if the "$2$" at the right hand side of the inequality can or cannot be replaced by a smaller real number.
