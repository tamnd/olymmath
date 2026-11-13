---
tag: JX57W5NK3B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161892
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $B_{k}$ be the number of ways to partition a $k$-element set into non-empty subsets (for example, $B_{3}=5$, because the set $\{1,2,3\}$ has 5 partitions: (123), (1,2,3), (12,3), (13,2), (1,23)). Prove that if $p$ is a prime number and $k$ is a natural number, then $B_{k+p^{p}-1}-B_{k}$ is divisible by $p$.
