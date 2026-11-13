---
tag: 8SSXDGP3TR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231752
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A quadruple of integers $(a, b, c, d)$ is said good if $ad-bc=2020$. Two good quadruplets are said to be dissimilar if it is not possible to obtain one from the other using a finite number of applications of the following operations:
$$(a,b,c,d) \rightarrow (-c,-d,a,b)$$
$$(a,b,c,d) \rightarrow (a,b,c+a,d+b)$$
$$(a,b,c,d) \rightarrow (a,b,c-a,d-b)$$

Let $A$ be a set of $k$ good quadruples, two by two dissimilar. Show that $k \leq 4284$.
