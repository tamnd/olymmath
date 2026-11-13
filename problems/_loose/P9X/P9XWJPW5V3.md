---
tag: P9XWJPW5V3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Taiwan TST Round 2
    url: https://artofproblemsolving.com/community/c6h1431255
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=61143
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=253146
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2017
    source: hf-ai-mo-aops
    label: 2017 Taiwan TST Round 2
---
Find all integer $c\in\{0,1,...,2016\}$ such that the number of $f:\mathbb{Z}\rightarrow\{0,1,...,2016\}$ which satisfy the following condition is minimal:
(1) $f$ has periodic $2017$ (2) $f(f(x)+f(y)+1)-f(f(x)+f(y))\equiv c\pmod{2017}$ Proposed by William Chao
