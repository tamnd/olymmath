---
tag: MS2G4RWT0Q
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Russia/train/0000.parquet#row=285
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian
    source: hf-mathnet
    label: Russia XLIII Russian mathematical olympiad
---
Positive numbers $a_1, a_2, \dots, a_n$ are written on the board in a row.
For every $i = 1, 2, \dots, n$, Vasya wishes to write a number $b_i \ge a_i$ so that for every $i, j \in \{1, 2, \dots, n\}$, at least one of the ratios $b_i/b_j$ and $b_j/b_i$ is an integer. Prove that Vasya can reach this goal so

$$
\text{that } b_1 b_2 \dots b_n \le 2^{(n-1)/2} a_1 a_2 \dots a_n.
$$
