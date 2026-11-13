---
tag: PBHEBGDXC2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1994 Hong Kong TST
    url: https://artofproblemsolving.com/community/c6h587327
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=40727
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237597
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hk-pc/1994
    source: hf-ai-mo-aops
    label: 1994 Hong Kong TST
---
Let $m$ and $n$ be positive integers where $m$ has $d$ digits in base ten and $d\leq n$ . Find the sum of all the digits (in base ten) of the product $(10^n-1)m$ .
