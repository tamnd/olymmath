---
tag: QZWWCNT1B4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2001 Cono Sur Olympiad
    url: https://artofproblemsolving.com/community/c6h420814
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=22203
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=223387
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cono-sur/2001
    source: hf-ai-mo-aops
    label: 2001 Cono Sur Olympiad
---
A sequence $a_1,a_2,\ldots$ of positive integers satisfies the following properties.
- $a_1 = 1$
- $a_{3n+1} = 2a_n + 1$
- $a_{n+1}\ge a_n$
- $a_{2001} = 200$
Find the value of $a_{1000}$ .

*Note*. In the original statement of the problem, there was an extra condition:

- every positive integer appears at least once in the sequence.
However, with this extra condition, there is no solution, i.e., no such sequence exists. (Try to prove it.) The problem as written above does have a solution.
