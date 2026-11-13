---
tag: 2BS2Q2FYRY
kind: problem
type: answer
answer: "1349380"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=95447
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $E=\{1,2,3, \cdots, 200\}, G=\left\{a_{1}, a_{2}, a_{3}, \cdots, a_{100}\right\} \subset E$, and $G$ has the following two properties:
(I) For any $1 \leqslant i \leqslant j \leqslant 100$, it always holds that
$$
a_{i}+a_{j} \neq 201 ;
$$
(II) $\sum_{i=1}^{100} a_{i}=10080$.

Prove: The number of odd numbers in $G$ is a multiple of 4, and the sum of the squares of all numbers in $G$ is a constant.
