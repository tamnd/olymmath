---
tag: NR9PWP9FXA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Peru Cono Sur TST
    url: https://artofproblemsolving.com/community/c6h3154246
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=50431
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246066
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pe-conosur-tst/2020
    source: hf-ai-mo-aops
    label: 2020 Peru Cono Sur TST
---
Find the smallest positive integer $n$ such that for any $n$ distinct real numbers $b_1, b_2,\ldots ,b_n$ in the interval $[ 1, 1000 ]$ there always exist $b_i$ and $b_j$ such that: $$ 0<b_i-b_j<1+3\sqrt[3]{b_ib_j} $$
