---
tag: 2PHZTT6E5H
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h1322686
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=15810
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217506
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2017
    source: hf-ai-mo-aops
    label: 2017 NIMO Problems
---
Call a pair of integers $(a,b)$ *primitive* if there exists a positive integer $\ell$ such that $(a+bi)^\ell$ is real. Find the smallest positive integer $n$ such that less than $1\%$ of the pairs $(a, b)$ with $0 \le a, b \le n$ are primitive.

*Proposed by Mehtaab Sawhney*
