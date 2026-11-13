---
tag: 2FEV1PRHHS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1991 Bundeswettbewerb Mathematik
    url: https://artofproblemsolving.com/community/c6h6321
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39361
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236661
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-bundeswettbewerb/1991
    source: hf-ai-mo-aops
    label: 1991 Bundeswettbewerb Mathematik
---
A set $M$ of points in the plane will be called obtuse, if any 3 points from $M$ are the vertices of an obtuse triangle.

a.) Prove: For each finite obtuse set $M$ there is a point in the plane with the following property: $P$ is no element from $M$ and $M \cup \{P\}$ is also obtuse.

b.) Determine whether the statement from a.) will remain valid, if it is replaced by infinite.
