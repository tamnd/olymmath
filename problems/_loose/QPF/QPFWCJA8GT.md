---
tag: QPFWCJA8GT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Taiwan TST Round 2
    url: https://artofproblemsolving.com/community/c6h2279056
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=19490
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=148486
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2020
    source: hf-ai-mo-aops
    label: 2020 Taiwan TST Round 2
---
Find all functions $f:\mathbb Z_{>0}\to \mathbb Z_{>0}$ such that $a+f(b)$ divides $a^2+bf(a)$ for all positive integers $a$ and $b$ with $a+b>2019$ .
