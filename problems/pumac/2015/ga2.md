---
tag: XHP2S2AC1E
kind: problem
appearances:
  - at: pumac/2015/ga2
    primary: true
  - at: pumac/2015/gb4
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2015 official paper
    url: https://pumac.princeton.edu/s/PUMaC2015_GeometryA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1600572
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=12976
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=214883
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Terry the Tiger lives on a cube-shaped world with edge length $2$ . Thus he walks on the outer surface. He is tied, with a leash of length $2$ , to a post located at the center of one of the faces of the cube. The surface area of the region that Terry can roam on the cube can be represented as $\frac{p \pi}{q} + a\sqrt{b}+c$ for integers $a, b, c, p, q$ where no integer square greater than $1$ divides $b, p$ and $q$ are coprime, and $q > 0$ . What is $p + q + a + b + c$ ? (Terry can be at a location if the shortest distance along the surface of the cube between that point and the post is less than or equal to $2$ .)
