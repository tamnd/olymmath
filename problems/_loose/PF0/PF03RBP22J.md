---
tag: PF03RBP22J
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 IberoAmerican
    url: https://artofproblemsolving.com/community/c6h435465
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=6523
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208654
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ibero/2011
    source: hf-ai-mo-aops
    label: 2011 IberoAmerican
---
Let $k$ and $n$ be positive integers, with $k \geq 2$ . In a straight line there are $kn$ stones of $k$ colours, such that there are $n$ stones of each colour. A *step* consists of exchanging the position of two adjacent stones. Find the smallest positive integer $m$ such that it is always possible to achieve, with at most $m$ steps, that the $n$ stones are together, if:
a) $n$ is even.
b) $n$ is odd and $k=3$
