---
tag: 2V2PH73AAS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Bulgarian Spring Mathematical Competition
    url: https://artofproblemsolving.com/community/c6h3289152
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1543
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Bulgaria/train/0001.parquet#row=245
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bg-spring/2024
    source: hf-ai-mo-aops
    label: 2024 Bulgarian Spring Mathematical Competition
  - at: bg-spring
    source: hf-mathnet
    label: Bulgaria 3 Bulgarian Spring Tournament
---
Let $d \geq 3$ be a positive integer. The binary strings of length $d$ are splitted into $2^{d-1}$ pairs, such that the strings in each pair differ in exactly one position. Show that there exists an $\textit{alternating cycle}$ of length at most $2d-2$ , i.e. at most $2d-2$ binary strings that can be arranged on a circle so that any pair of adjacent strings differ in exactly one position and exactly half of the pairs of adjacent strings are pairs in the split.
