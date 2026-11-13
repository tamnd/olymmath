---
tag: BVMDB970EG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1993 Bundeswettbewerb Mathematik
    url: https://artofproblemsolving.com/community/c6h2937586
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39373
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236673
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-bundeswettbewerb/1993
    source: hf-ai-mo-aops
    label: 1993 Bundeswettbewerb Mathematik
---
Let $M$ be a finite subset of the plane such that for any two different points $A,B\in M$ there is a point $C\in M$ such that $ABC$ is equilateral. What is the maximal number of points in $M?$
