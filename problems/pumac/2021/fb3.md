---
tag: ACQYECDK4P
kind: problem
appearances:
  - at: pumac/2021/fb3
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2021 official paper
    url: https://pumac.princeton.edu/s/PUMaC_2021_Finals_B.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h2834950
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73334
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263255
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\vartriangle ABC$ be a triangle, and let $C_0, B_0$ be the feet of perpendiculars from $C$ and $B$ onto $AB$ and $AC$ respectively. Let $\Gamma$ be the circumcircle of $\vartriangle ABC$ . Let E be a point on the $\Gamma$ such that $AE \perp BC$ . Let $M$ be the midpoint of $BC$ and let $G$ be the second intersection of EM and $\Gamma$ . Let $T$ be a point on $\Gamma$ such that $T G$ is parallel to $BC$ . Prove that $T, A, B_0, C_0$ are concyclic.
