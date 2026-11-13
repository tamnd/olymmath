---
tag: 81TGY9WYWM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h582280
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=11577
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213534
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2014
    source: hf-ai-mo-aops
    label: 2014 NIMO Problems
---
Let a positive integer $n$ be $\textit{nice}$ if there exists a positive integer $m$ such that $$ n^3 < 5mn < n^3 +100. $$ Find the number of *nice* positive integers.

*Proposed by Akshaj*
