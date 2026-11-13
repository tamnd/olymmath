---
tag: FSGF3FBVBX
kind: problem
type: answer
answer: "0"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242588
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\{a_n\}$ be a sequence of integers satisfying the following conditions.

- $a_1=2021^{2021}$

- $0 \le a_k < k$ for all integers $k \ge 2$

- $a_1-a_2+a_3-a_4+ \cdots + (-1)^{k+1}a_k$ is multiple of $k$ for all positive integers $k$.

Determine the $2021^{2022}$th term of the sequence $\{a_n\}$.
