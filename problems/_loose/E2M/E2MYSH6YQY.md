---
tag: E2MYSH6YQY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Bulgarian Spring Mathematical Competition
    url: https://artofproblemsolving.com/community/c6h3039506
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=601
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204270
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
A positive integer $b$ is called good if there exist positive integers $1=a_1, a_2, \ldots, a_{2023}=b$ such that $|a_{i+1}-a_i|=2^i$ . Find the number of the good integers.
