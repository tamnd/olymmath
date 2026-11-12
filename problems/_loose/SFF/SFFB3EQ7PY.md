---
tag: SFFB3EQ7PY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 CIIM
    url: https://artofproblemsolving.com/community/c6h3159263
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=80034
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ciim/2023
    source: hf-ai-mo-aops
    label: 2023 CIIM
---
Let $n$ be a positive integer. We define $f(n)$ as the number of finite sequences $(a_1, a_2, \ldots , a_k)$ of positive integers such that $a_1 < a_2 < a_3 < \cdots < a_k$ and $$ a_1+a_2^2+a_3^3+\cdots + a_k^k \leq n. $$ Determine the positive constants $\alpha$ and $C$ such that $$ \lim\limits_{n\rightarrow \infty} \frac{f(n)}{n^\alpha}=C. $$
