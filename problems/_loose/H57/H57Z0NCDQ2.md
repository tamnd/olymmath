---
tag: H57Z0NCDQ2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1995 IMO Shortlist
    url: https://artofproblemsolving.com/community/c6h219905
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=25289
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=226050
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: isl/1995
    source: hf-ai-mo-aops
    label: 1995 IMO Shortlist
---
For positive integers $ n,$ the numbers $ f(n)$ are defined inductively as follows: $ f(1) = 1,$ and for every positive integer $ n,$ $ f(n+1)$ is the greatest integer $ m$ such that there is an arithmetic progression of positive integers $ a_1 < a_2 < \ldots < a_m = n$ for which

$$ f(a_1) = f(a_2) = \ldots = f(a_m).$$

Prove that there are positive integers $ a$ and $ b$ such that $ f(an+b) = n+2$ for every positive integer $ n.$
