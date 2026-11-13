---
tag: HCBAVCA2V1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2004 All-Russian Olympiad
    url: https://artofproblemsolving.com/community/c6h5444
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55818
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249219
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/2004
    source: hf-ai-mo-aops
    label: 2004 All-Russian Olympiad
---
Let $n > 3$ be a natural number, and let $x_1$ , $x_2$ , ..., $x_n$ be $n$ positive real numbers whose product is $1$ . Prove the inequality $$ \frac {1}{1 + x_1 + x_1\cdot x_2} + \frac {1}{1 + x_2 + x_2\cdot x_3} + ... + \frac {1}{1 + x_n + x_n\cdot x_1} > 1. $$
