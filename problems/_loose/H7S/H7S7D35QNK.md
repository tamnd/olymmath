---
tag: H7S7D35QNK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=157726
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
To each vertex $P_{i}(i=1, \ldots, 5)$ of a pentagon an integer $x_{i}$ is assigned, the sum $s=\sum x_{i}$ being positive. The following operation is allowed, provided at least one of the $x_{i}$ 's is negative: Choose a negative $x_{i}$, replace it by $-x_{i}$, and add the former value of $x_{i}$ to the integers assigned to the two neighboring vertices of $P_{i}$ (the remaining two integers are left unchanged).
This operation is to be performed repeatedly until all negative integers disappear. Decide whether this procedure must eventually terminate.
