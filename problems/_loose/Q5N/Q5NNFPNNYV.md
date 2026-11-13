---
tag: Q5NNFPNNYV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Baltic_Way/train/0001.parquet#row=265
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: baltic-way/2019
    source: hf-mathnet
    label: Baltic Way Baltic Way 2019
---
A fair $k$-die is a die with $k$ sides and the numbers $1, 2, \dots, k$ written one on each side such that the probability of getting one of these numbers when rolling the die is exactly $\frac{1}{k}$ for each number. Let $n$ be a positive integer and $a_1 \ge a_2 \ge \dots \ge a_n > 0$ be integers. Georg has $n$ fair dice with $a_1, a_2, \dots, a_n$ sides, respectively. When he rolls the $n$ dice, he sums the $n$ numbers he gets. Prove that the probability of getting a specific sum is at most $\frac{1}{a_1}$.
