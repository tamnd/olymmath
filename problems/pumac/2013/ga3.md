---
tag: 81GZWD38QC
kind: problem
appearances:
  - at: pumac/2013/ga3
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2013 official paper
    url: https://pumac.princeton.edu/s/PUMaC2013_GeometryA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h563715
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10156
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212151
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the shape formed from taking equilateral triangle $ABC$ with side length $6$ and tracing out the arc $BC$ with center $A$ . Set the shape down on line $l$ so that segment $AB$ is perpendicular to $l$ , and $B$ touches $l$ . Beginning from arc $BC$ touching $l$ , we roll $ABC$ along $l$ until both points $A$ and $C$ are on the line. The area traced out by the roll can be written in the form $n\pi$ , where $n$ is an integer. Find $n$ .
