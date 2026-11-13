---
tag: DZST02AWSN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2005 AIME Problems
    url: https://artofproblemsolving.com/community/c6h61137
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=64006
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=255647
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: aime
    source: hf-ai-mo-aops
    label: 2005 AIME Problems
---
A particle moves in the Cartesian Plane according to the following rules:

1. From any lattice point $ (a,b)$ , the particle may only move to $ (a + 1,b)$ , $ (a,b + 1)$ , or $ (a + 1,b + 1)$ .
2. There are no right angle turns in the particle's path.

How many different paths can the particle take from $ (0,0)$ to $ (5,5)$ ?
