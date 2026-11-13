---
tag: 6FVY3PTP41
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2007 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h338557
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73948
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263435
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: smt/2007
    source: hf-ai-mo-aops
    label: 2007 Stanford Mathematics Tournament
---
Let there be 50 natural numbers $ a_i$ such that $ 0 < a_1 < a_2 < ... < a_{50} < 150$ . What is the greatest possible sum of the differences $ d_j$ where each $ d_j = a_{j + 1} - a_j$ ?
