---
tag: J9H21KSARA
kind: problem
type: answer
answer: (3,3,2,3),(3,17,3,7),(17,3,3,7),(3,37,3,13),(37,3,3,13)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=79838
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all quadruplets $(a, b, c, k)$ of integers such that $a, b, c$ are prime numbers and $k$ is a strictly positive integer satisfying

$$
a^{2}+b^{2}+16 c^{2}=9 k^{2}+1
$$
