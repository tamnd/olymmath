---
tag: WMKVAQEVFH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239569
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_1, a_2, a_3$ be three distinct real numbers. Define
$b_1=\left(1+\frac{a_1a_2}{a_1-a_2}\right)\left(1+\frac{a_1a_3}{a_1-a_3}\right)$
$b_2=\left(1+\frac{a_2a_3}{a_2-a_3}\right)\left(1+\frac{a_2a_1}{a_2-a_1}\right)$
$b_3=\left(1+\frac{a_3a_1}{a_3-a_1}\right)\left(1+\frac{a_3a_2}{a_3-a_2}\right)$
Prove that $1 + |a_1b_1+a_2b_2+a_3b_3| \le (1+|a_1|) (1+|a_2|)(1+|a_3|)$
When does equality hold?
