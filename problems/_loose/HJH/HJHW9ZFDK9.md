---
tag: HJHW9ZFDK9
kind: problem
type: answer
answer: n + 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Singapore/train/0000.parquet#row=125
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sg-smo
    source: hf-mathnet
    label: Singapore Singapore Mathematical Olympiad (SMO)
---
Alice and Bob play a game. Bob starts by picking a set $S$ consisting of $M$ vectors of length $n$ with entries either $0$ or $1$. Alice picks a sequence of numbers $y_1 \le y_2 \le \cdots \le y_n$ from the interval $[0, 1]$, and a choice of real numbers $x_1, \dots, x_n \in \mathbb{R}$. Bob wins if he can pick a vector $(z_1, z_2, \dots, z_n) \in S$ such that
$$
\sum_{i=1}^{n} x_i y_i \le \sum_{i=1}^{n} x_i z_i,
$$
otherwise Alice wins. Determine the minimum value of $M$ so that Bob can guarantee a win?
