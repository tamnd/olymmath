---
tag: V73EFTZW2Q
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h612404
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10461
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212447
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: smt/2013
    source: hf-ai-mo-aops
    label: 2013 Stanford Mathematics Tournament
---
$x$ is a base- $10$ number such that when the digits of $x$ are interpreted as a base- $20$ number, the resulting number is twice the value as when they are interpreted as a base- $13$ number. Find the sum of all possible values of $x$ .
