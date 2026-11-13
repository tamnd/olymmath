---
tag: W9PV4DZKQ0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 South Africa National Olympiad
    url: https://artofproblemsolving.com/community/c6h3122549
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=59724
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/South_Africa/train/0000.parquet#row=290
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: za-samo/2023
    source: hf-ai-mo-aops
    label: 2023 South Africa National Olympiad
  - at: za-samo
    source: hf-mathnet
    label: South Africa The South African Mathematical Olympiad Third Round
---
Let $A$ be a set of real numbers satisfying the following:
(a) $\sqrt(n^2+1) \in A$ for all positive integers $n$ ,
(b) if $x \in A$ and $y \in A$ , then $x-y \in A$ .
Prove that every integer can be written as a product of two different elements in $A$ .
