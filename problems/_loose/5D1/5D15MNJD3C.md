---
tag: 5D15MNJD3C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=264556
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $28$ students who have to be separated into two groups such that the number of students in each group
is a multiple of $4$. The number of ways to split them into the groups can be written as
$$\sum_{k \ge 0} 2^k a_k = a_0 +2a_1 +4a_2 +...$$
where each $a_i$ is either $0$ or $1$. Find the value of
$$\sum_{k \ge 0} ka_k = 0+ a_1 +2a_2 +3a3_ +....$$
