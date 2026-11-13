---
tag: 68XKM07BKN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Bulgarian Spring Mathematical Competition
    url: https://artofproblemsolving.com/community/c6h3039531
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=608
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204277
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bg-spring/2023
    source: hf-ai-mo-aops
    label: 2023 Bulgarian Spring Mathematical Competition
---
Given is a directed graph with $28$ vertices, such that there do not exist vertices $u, v$ , such that $u \rightarrow v$ and $v \rightarrow u$ . Every $16$ vertices form a directed cycle. Prove that among any $17$ vertices, we can choose $15$ which form a directed cycle.
