---
tag: 2EN9NCB8QP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1990 IMO Longlists
    url: https://artofproblemsolving.com/community/c6h220945
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=24975
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=148748
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ill/1990
    source: hf-ai-mo-aops
    label: 1990 IMO Longlists
---
Given $ n$ countries with three representatives each, $ m$ committees $ A(1),A(2), \ldots, A(m)$ are called a cycle if

*(i)* each committee has $ n$ members, one from each country;
*(ii)* no two committees have the same membership;
*(iii)* for $ i = 1, 2, \ldots,m$ , committee $ A(i)$ and committee $ A(i + 1)$ have no member in common, where $ A(m + 1)$ denotes $ A(1);$
*(iv)* if $ 1 < |i - j| < m - 1,$ then committees $ A(i)$ and $ A(j)$ have at least one member in common.

Is it possible to have a cycle of 1990 committees with 11 countries?
