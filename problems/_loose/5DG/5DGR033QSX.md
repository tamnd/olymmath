---
tag: 5DGR033QSX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h555563
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=9999
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=211995
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2013
    source: hf-ai-mo-aops
    label: 2013 NIMO Problems
---
Integers $a$ , $b$ , $c$ are selected independently and at random from the set $ \{ 1, 2, \cdots, 10 \} $ , with replacement. If $p$ is the probability that $a^{b-1}b^{c-1}c^{a-1}$ is a power of two, compute $1000p$ .

*Proposed by Evan Chen*
