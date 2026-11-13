---
tag: J13TXS6P7P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h2378343
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=19303
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220846
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2020
    source: hf-ai-mo-aops
    label: 2020 Online Math Open Problems
---
Compute the smallest positive integer $M$ such that there exists a positive integer $n$ such that

- $M$ is the sum of the squares of some $n$ consecutive positive integers, and
- $2M$ is the sum of the squares of some $2n$ consecutive positive integers.

*Proposed by Jaedon Whyte*
