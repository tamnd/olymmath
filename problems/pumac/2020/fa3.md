---
tag: 1P451HRTGW
kind: problem
appearances:
  - at: pumac/2020/fa3
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2020 official paper
    url: https://pumac.princeton.edu/s/2020_Indiv_Finals_A.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h2747872
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73245
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer, and let $F$ be a family of subsets of $\{1, 2, ... , 2^n\}$ such that for any non-empty $ A\in F$ there exists $B \in F$ so that $|A| = |B| + 1$ and $B \subset A$ . Suppose that F contains all $(2^n - 1)$ -element subsets of $\{1, 2, ... , 2^n\}$ Determine the minimal possible value of $|F|$ .
