---
tag: TXFDWBPWP9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 China Second Round Olympiad
    url: https://artofproblemsolving.com/community/c6h463315
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=4746
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206913
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-league/2010
    source: hf-ai-mo-aops
    label: 2010 China Second Round Olympiad
---
let $n>2$ be a fixed integer.positive reals $a_i\le 1$ (for all $1\le i\le n$ ).for all $k=1,2,...,n$ ,let $A_k=\frac{\sum_{i=1}^{k}a_i}{k}$ prove that $|\sum_{k=1}^{n}a_k-\sum_{k=1}^{n}A_k|<\frac{n-1}{2}$ .
