---
tag: EBMNXHD0KE
kind: problem
type: answer
answer: 1,2,\cdots,2(-1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=98750
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given two natural numbers $n$ and $m$ greater than 1, find all natural numbers $l$ such that for any positive numbers $a_{1}$, $a_{2}, \cdots, a_{n}$, we have
$$
\sum_{k=1}^{n} \frac{1}{s_{k}}\left(l k+\frac{1}{4} l^{2}\right)<m^{2} \sum_{k=1}^{n} \frac{1}{a_{k}},
$$

where $s_{k}=a_{1}+a_{2}+\cdots+a_{k}$.
(1992 China National Team Selection Test)
