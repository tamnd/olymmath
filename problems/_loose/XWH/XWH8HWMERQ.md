---
tag: XWH8HWMERQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263959
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A positive integer is called *uphill* if the digits in its decimal representation form a non-decreasing sequence from left to right. That is, a number with decimal representation $\overline{a_1a_2\cdots{}a_d}$ is uphill if $a_i\leq{}a_{i+1}$ for all $i$
(All single-digit integers are uphill.)

Given a positive integer $n$, let $f(n)$ be the smallest nonnegative integer $m$ such that $n+m$ is uphill. For example, $f(520)=35$ and $f(169)=0$. Find, with proof, the value of$$f(1)-f(2)+f(3)-f(4)+\cdots{}+f(10^{2018}-1)$$
