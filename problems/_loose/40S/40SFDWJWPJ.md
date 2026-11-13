---
tag: 40SFDWJWPJ
kind: problem
type: answer
answer: f(k)=6k
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161485
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
At a candlelit dinner, there are $6k+3$ married couples, where $k$ is a natural number. The guests sit at $12k+6$ evenly spaced places around a round table. Each man among the guests has exactly one sister, and each woman has exactly one brother (a brother and sister cannot be married to each other). The guests are arranged around the table such that each man sits closer to his wife than to his sister. Let $f(k)$ be the maximum possible number of women who sit closer to their brother than to their husband, where the maximum is taken over all possible arrangements and all possible sets of guests that satisfy the conditions of the problem. Prove: $f(k)=6k$.
