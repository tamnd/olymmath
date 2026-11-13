---
tag: 31S2WQN0ZA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 Harvard-MIT Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h611406
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=71385
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=262172
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hmmt/2000
    source: hf-ai-mo-aops
    label: 2000 Harvard-MIT Mathematics Tournament
---
Given collinear points $A,B,C$ such that $AB = BC$ . How can you construct a point $D$ on $AB$ such that $AD = 2DB$ , using only a straightedge? (You are not allowed to measure distances)
