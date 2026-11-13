---
tag: TFCYH7F3S8
kind: problem
type: answer
answer: (4, 4, 15^{25} + 1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217408
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all $n>1$ and integers $a_1,a_2,\dots,a_n$ satisfying the following three conditions:
(i) $2<a_1\le a_2\le \cdots\le a_n$
(ii) $a_1,a_2,\dots,a_n$ are divisors of $15^{25}+1$.
(iii) $2-\frac{2}{15^{25}+1}=\left(1-\frac{2}{a_1}\right)+\left(1-\frac{2}{a_2}\right)+\cdots+\left(1-\frac{2}{a_n}\right)$
