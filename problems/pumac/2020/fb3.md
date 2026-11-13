---
tag: FT6AC9ERGW
kind: problem
appearances:
  - at: pumac/2020/fb3
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2020 official paper
    url: https://pumac.princeton.edu/s/2020_Indiv_Finals_B.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h2747869
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73244
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263165
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ABC$ be a triangle and let the points $D, E$ be on the rays $AB$ , $AC$ such that $BCED$ is cyclic. Prove that the following two statements are equivalent: $\bullet$ There is a point $X$ on the circumcircle of $ABC$ such that $BDX$ , $CEX$ are tangent to each other. $\bullet$ $AB \cdot AD \le 4R^2$ , where $R$ is the radius of the circumcircle of $ABC$ .
