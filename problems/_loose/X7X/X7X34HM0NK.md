---
tag: X7X34HM0NK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: Russian TST 2014
    url: https://artofproblemsolving.com/community/c6h3229899
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=57142
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249962
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-tst/2014
    source: hf-ai-mo-aops
    label: Russian TST 2014
---
Let $n>1$ be an integer and $x_1,x_2,\ldots,x_n$ be $n{}$ arbitrary real numbers. Determine the minimum value of $$\sum_{i<j}|\cos(x_i-x_j)|.$$
