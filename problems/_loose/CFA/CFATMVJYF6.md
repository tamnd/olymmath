---
tag: CFATMVJYF6
kind: problem
type: answer
answer: (18, 9)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243533
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For each positive integer $n$ let $s(n)$ denote the sum of the decimal digits of $n$. Find all pairs of positive integers $(a, b)$ with $a > b$ which simultaneously satisfy the following two conditions

$$a \mid b + s(a)$$
$$b \mid a + s(b)$$

*Proposed by Victor Domínguez*
