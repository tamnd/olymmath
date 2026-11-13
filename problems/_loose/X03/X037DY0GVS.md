---
tag: X037DY0GVS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240118
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a collection of sets $X = \{A_1, A_2, ..., A_n\}$. A set $\{a_1, a_2, ..., a_n\}$ is called a single representation of $X$ if $a_i \in A_i$ for all i. Let $|S| = mn$, $S = A_1\cup A_2 \cup ... \cup A_n = B_1 \cup B_2 \cup ... \cup B_n$ with $|A_i| = |B_i| = m$ for all $i$. Prove that $S = C_1 \cup C_2 \cup ... \cup C_n$ where for every $i, C_i $ is a single represenation for $\{A_j\}_{j=1}^n $and $\{B_j\}_{j=1}^n$.
