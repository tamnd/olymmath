---
tag: 7JK8JH68QR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Canadian Mathematical Olympiad Qualification
    url: https://artofproblemsolving.com/community/c6h2804826
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=34072
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=232973
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ca-cmoqr/2022
    source: hf-ai-mo-aops
    label: 2022 Canadian Mathematical Olympiad Qualification
---
Let $\{m, n, k\}$ be positive integers. $\{k\}$ coins are placed in the squares of an $m \times n$ grid. A square may contain any number of coins, including zero. Label the $\{k\}$ coins $C_1, C_2, · · · C_k$ . Let $r_i$ be the number of coins in the same row as $C_i$ , including $C_i$ itself. Let $s_i$ be the number of coins in the same column as $C_i$ , including $C_i$ itself. Prove that
$$\sum_{i=1}^k \frac{1}{r_i+s_i} \leq \frac{m+n}{4}$$
