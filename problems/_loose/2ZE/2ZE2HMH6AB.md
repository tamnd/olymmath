---
tag: 2ZE2HMH6AB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 Taiwan TST Round 3
    url: https://artofproblemsolving.com/community/c6h3556411
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2947
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2025
    source: hf-ai-mo-aops
    label: 2025 Taiwan TST Round 3
---
Let $a$ be a positive integer. We say that $a$ is bao-good if there exist integers $(s,l)$ such that:
1. There does not exist a positive integer $b$ for which
$$
a \mid s^b - l.
$$
2. For every proper divisor $a'$ of $a$ (that is, $a' \mid a$ and $1 \le a' < a$), there exists a positive integer $b$ such that
$$
a' \mid s^b - l.
$$
Determine all bao-good positive integers $a$.
