---
tag: BB1GYQDW2Z
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239580
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \in N$ and $k$ be such that $1 \le k \le n$. Find the number of ordered $k$-tuples $(a_1, a_2,...,a_k)$ of integers such the $1 \le a_j \le n$, for $1 \le j \le k$ and either there exist $l,m \in \{1, 2,..., k\}$ such that $l < m$ but $a_l > a_m$ or there exists $l \in \{1, 2,..., k\}$ such that $a_l - l$ is an odd number.
