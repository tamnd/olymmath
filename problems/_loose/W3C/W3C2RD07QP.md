---
tag: W3C2RD07QP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Miklós Schweitzer
    url: https://artofproblemsolving.com/community/c6h3271913
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=42057
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=238710
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: schweitzer/2023
    source: hf-ai-mo-aops
    label: 2023 Miklós Schweitzer
---
Let $C[-1,1]$ be the space of continuous real functions on the interval $[-1,1]$ with the usual supremum norm, and let $V{}$ be a closed, finite-codimensional subspace of $C[-1,1].$ Prove that there exists a polynomial $p\in V$ with norm at most one, which satisfies $p'(0)>2023.$
