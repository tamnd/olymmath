---
tag: 18AHPE30SX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=262976
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose sequence $\{a_i\} = a_1, a_2, a_3, ....$ satisfies $a_{n+1} = \frac{1}{a_n+1}$ for all positive integers $n$. Define $b_k$ for positive integers $k \ge 2$ to be the minimum real number such that the product $a_1 \cdot a_2 \cdot ...\cdot a_k$ does not exceed $b_k$ for any positive integer choice of $a_1$. Find $\frac{1}{b_2}+\frac{1}{b_3}+\frac{1}{b_4}+...+\frac{1}{b_{10}}.$
.
