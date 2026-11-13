---
tag: K5727FEMYT
kind: problem
appearances:
  - at: pumac/2013/ga1
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
    url: https://artofproblemsolving.com/community/c6h563711
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10153
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212148
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $O$ be a point with three other points $A,B,C$ and $\angle AOB=\angle BOC=\angle AOC=2\pi/3$ . Consider the average area of the set of triangles $ABC$ where $OA,OB,OC\in\{3,4,5\}$ . The average area can be written in the form $m\sqrt n$ where $m,n$ are integers and $n$ is not divisible by a perfect square greater than $1$ . Find $m+n$ .
