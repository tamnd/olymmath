---
tag: Q4YYKR3F4P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1978 All Soviet Union Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1872868
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55294
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248661
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/1978
    source: hf-ai-mo-aops
    label: 1978 All Soviet Union Mathematical Olympiad
---
Consider a sequence $$ x_n=(1+\sqrt2+\sqrt3)^n $$ Each member can be represented as $$ x_n=q_n+r_n\sqrt2+s_n\sqrt3+t_n\sqrt6 $$ where $q_n, r_n, s_n, t_n$ are integers. Find the limits of the fractions $r_n/q_n, s_n/q_n, t_n/q_n$ .
