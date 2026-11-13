---
tag: PZXNE9K43E
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Bulgarian Spring Mathematical Competition
    url: https://artofproblemsolving.com/community/c6h3289151
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1542
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Bulgaria/train/0001.parquet#row=242
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
    label: Bulgaria Bulgarian Spring Tournament
---
For a positive integer $n$ , denote with $b(n)$ the smallest positive integer $k$ , such that there exist integers $a_1, a_2, \ldots, a_k$ , satisfying $n=a_1^{33}+a_2^{33}+\ldots+a_k^{33}$ . Determine whether the set of positive integers $n$ is finite or infinite, which satisfy:

a) $b(n)=12;$ b) $b(n)=12^{12^{12}}.$
