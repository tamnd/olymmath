---
tag: WMTNPJWN7E
kind: problem
type: answer
answer: b(n)=F_n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=81077
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A subset of $\{1, \ldots, n\}$ is selfish if it contains its own cardinality, and if all its other elements are greater than this cardinality, in other words, if its cardinality is equal to its smallest element. Calculate the number $\mathrm{b}(\mathfrak{n})$ of selfish subsets of $\{1, \ldots, \mathfrak{n}\}$.
