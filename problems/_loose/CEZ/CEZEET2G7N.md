---
tag: CEZEET2G7N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 Switzerland - Final Round
    url: https://artofproblemsolving.com/community/c6h2984897
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=60527
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=252605
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ch-smo/2009
    source: hf-ai-mo-aops
    label: 2009 Switzerland - Final Round
---
A *palindrome* is a natural number that works in the decimal system forwards and backwards read is the same size (e.g. $1129211$ or $7337$ ). Determine all pairs $(m, n)$ of natural numbers, such that $$ (\underbrace{11... 11}_{m}) \cdot (\underbrace{11... 11}_{n}) $$ is a palindrome.
