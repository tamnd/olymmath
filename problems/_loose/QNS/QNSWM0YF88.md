---
tag: QNSWM0YF88
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250658
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the set $X =\{1, 2,3, ...,2018\}$.
How many positive integers $k$ with $2 \le k \le 2017$ that satisfy the following conditions:
i) There exists some partition of the set $X$ into $1009$ disjoint pairs which are $(a_1, b_1),(a_2, b_2), ...,(a_{1009}, b_{1009})$ with $|a_i - b_i| \in \{1, k\}$.
ii) For all partitions satisfy the condition (i), the sum $T = \sum^{1009}_{i=1} |a_i - b_i|$ has the right most digit is $9$
