---
tag: 70SX2XC3TH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Vietnam/train/0000.parquet#row=25
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: vn-vmo/2003
    source: hf-mathnet
    label: Vietnam 2003 Vietnamese Mathematical Olympiad
---
For each integer $n > 1$, denote by $s_n$ the number of permutations $(a_1, a_2, ..., a_n)$ of $n$ first positive integers such that each permutation satisfies the condition:
$$
1 \le |a_k - k| \le 2 \text{for every } k = 1, 2, ..., n.
$$
Prove that: $1.75 \cdot s_{n-1} < s_n < 2 \cdot s_{n-1}$ for all integers $n > 6$.
