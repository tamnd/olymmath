---
tag: RQGMT9JKCN
kind: problem
type: answer
answer: (j-1)2^j + 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=214615
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the set $S = {1,2,3,\ldots , j}$. Let $m(A)$ denote the maximum element of $A$. Prove that
$$\sum_ {A\subseteq S} m(A) = (j-1)2^j +1$$
