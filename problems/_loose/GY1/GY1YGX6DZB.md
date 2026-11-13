---
tag: GY1YGX6DZB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=187385
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a group of n people, there are 2021 friendships between pairs of people (friendship is a symmetric relation). It is known that no one has more than 45 friends, and there is someone who has exactly 45 friends. If $x_{k}$ denotes the number of friends that the $k$-th person has, prove that

$$
x_{1}^{2}+x_{2}^{2}+\ldots+x_{n}^{2} \leq 2024 n+2018
$$
