---
tag: C5TXACMVZE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1961 All-Soviet Union Olympiad
    url: https://artofproblemsolving.com/community/c6h1124394
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55031
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248389
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/1961
    source: hf-ai-mo-aops
    label: 1961 All-Soviet Union Olympiad
---
Consider a $2^k$ -tuple of numbers $(a_1,a_2,\dots,a_{2^k})$ all equal to $1$ or $-1$ . In one step, we transform it to $(a_1a_2,a_2a_3,\dots,a_{2^k}a_1)$ . Prove that eventually, we will obtain a $2^k$ -tuple consisting only of $1$ 's.
