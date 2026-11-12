---
tag: SSAP8BF1CR
kind: problem
type: answer
answer: \pi(n-2)/n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=61877
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A line cuts off a triangle $A P Q$ from a regular $n$-sided polygon with side 1 such that $A P+A Q=1$ ( $A-$ is a vertex of the $n$-sided polygon).

Find the sum of the angles under which the segment $P Q$ is seen from all vertices of the $n$-sided polygon, except $A$.
