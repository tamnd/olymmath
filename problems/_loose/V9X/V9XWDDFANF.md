---
tag: V9XWDDFANF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Canadian Mathematical Olympiad Qualification Repechage
    url: https://artofproblemsolving.com/community/c6h386743
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=6278
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208425
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ca-cmoqr/2011
    source: hf-ai-mo-aops
    label: 2011 Canadian Mathematical Olympiad Qualification Repechage
---
Determine all pairs $(n,m)$ of positive integers for which there exists an infinite sequence $\{x_k\}$ of $0$ 's and $1$ 's with the properties that if $x_i=0$ then $x_{i+m}=1$ and if $x_i = 1$ then $x_{i+n} = 0.$
