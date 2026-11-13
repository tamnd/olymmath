---
tag: FHD1HXS86F
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
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77584
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We say that a set $A$ of polynomials with real coefficients is beautiful if, whenever $P$ and $Q$ are two distinct elements of $A$, there exist positive integers $a_{1}>\cdots>a_{2020}$ such that

$$
P Q=\sum_{i=1}^{2020} i X^{a_{i}}
$$

What is the maximal cardinality of a beautiful set?
