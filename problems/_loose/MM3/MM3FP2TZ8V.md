---
tag: MM3FP2TZ8V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2001 IberoAmerican
    url: https://artofproblemsolving.com/community/c6h83737
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=22995
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=224121
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ibero/2001
    source: hf-ai-mo-aops
    label: 2001 IberoAmerican
---
We say that a natural number $n$ is *charrua* if it satisfy simultaneously the following conditions:
- Every digit of $n$ is greater than 1.
- Every time that four digits of $n$ are multiplied, it is obtained a divisor of $n$ Show that every natural number $k$ there exists a *charrua* number with more than $k$ digits.
