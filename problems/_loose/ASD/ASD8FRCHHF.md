---
tag: ASD8FRCHHF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1990 French Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2565124
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39090
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236422
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: fr-tst/1990
    source: hf-ai-mo-aops
    label: 1990 French Mathematical Olympiad
---
In a triangle $ABC$ , $\Gamma$ denotes the excircle corresponding to $A$ , $A',B',C'$ are the points of tangency of $\Gamma$ with $BC,CA,AB$ respectively, and $S(ABC)$ denotes the region of the plane determined by segments $AB',AC'$ and the arc $C'A'B'$ of $\Gamma$ .

Prove that there is a triangle $ABC$ of a given perimeter $p$ for which the area of $S(ABC)$ is maximal. For this triangle, give an approximate measure of the angle at $A$ .
