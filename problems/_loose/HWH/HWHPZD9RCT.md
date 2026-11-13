---
tag: HWHPZD9RCT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269094
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \in \mathbb{N}$, $n \geq 2$, $a_1, a_2, \cdots , a_n \in \mathbb{R}$ and $a_n = max \{a_1, a_2,\cdots , a_n\}$

- If $t_k$, $t'_k \in \mathbb{R}$, $k \in \{1, 2,\cdots , n\}$ , $t_k \leq t'_k$, for any $k \in \{1, 2, \cdots, n - 1\}$ and $$\sum \limits_{k=1}^nt_k=\sum \limits_{k=1}^nt'_k$$Prove that $$\sum \limits_{k=1}^nt_ka_k\geq \sum \limits_{k=1}^nt'_ka_k$$

- If $b_k$, $c_k \in \mathbb{R}^*_+$, $k \in \{1, 2,\cdots , n\}$ , $b_k \leq c_k$ for any $k \in \{1, 2,\cdots, k - 1\}$ and $$b_1b_2\cdots b_n=c_1c_2\cdots c_n$$Prove that $$\prod \limits_{k=1}^n b_k^{a_k}\geq \prod \limits_{k=1}^nc_k^{a_k}$$
