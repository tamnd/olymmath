---
tag: 5W92WVA4KK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=254645
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $P_1P_2...P_n$ be an oriented closed polygonal line with no three segments passing through a single point. Each point $P_i$ is assinged the angle $180^o - \angle P_{i-1}P_iP_{i+1} \ge 0$ if $P_{i+1}$ lies on the left from the ray $P_{i-1}P_i$, and the angle $-(180^o -\angle P_{i-1}P_iP_{i+1}) < 0$ if $P_{i+1}$ lies on the right. Prove that if the sum of all the assigned angles is a multiple of $720^o$, then the number of self-intersections of the polygonal line is odd
