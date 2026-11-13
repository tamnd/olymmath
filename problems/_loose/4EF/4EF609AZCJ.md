---
tag: 4EF609AZCJ
kind: problem
type: answer
answer: "-8"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Baltic_Way/train/0001.parquet#row=58
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: baltic-way/2013
    source: hf-mathnet
    label: Baltic Way Baltic Way 2013
---
Let $a_1 = 1$, $a_2 = 10$ and $a_{n+1} = 2a_n + 3a_{n-1}$, $n > 1$. Then the infinite sum
$$
P(x) = \sum_{i=1}^{\infty} a_i x^i,
$$
is defined and finite for $x \in ] -\frac{1}{3}, \frac{1}{3}[$. Find all $y \in \mathbb{Z}$ such that
$$
P\left(\frac{1}{y}\right) \in \mathbb{Z}.
$$
