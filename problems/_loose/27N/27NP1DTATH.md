---
tag: 27NP1DTATH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Baltic_Way/train/0001.parquet#row=384
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: baltic-way-sl/2023
    source: hf-mathnet
    label: Baltic Way Baltic Way 2023 Shortlist
---
For sets $S$ and $T$ consisting of positive real numbers, define $S + T = \{s + t \mid s \in S, t \in T\}$ and $\frac{1}{S} = \{\frac{1}{s} \mid s \in S\}$. Define the sets $A_1, A_2, A_3, \dots$ recursively by $A_1 = \{1\}$ and
$$
A_n = \bigcup_{i=1}^{n-1} \left( (A_i + A_{n-i}) \cup \left( \frac{1}{\frac{1}{A_i} + \frac{1}{A_{n-i}}} \right) \right)
$$
for all integers $n \ge 1$. Prove that for all integers $n \ge 1$ we have
$$
2^{n-1} \le |A_n| \le 8^n.
$$
