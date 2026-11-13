---
tag: PPR8HX87AS
kind: problem
appearances:
  - at: pumac/2011/ga6
    primary: true
  - at: pumac/2011/gb8
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2011 official paper
    url: https://pumac.princeton.edu/s/PUMaC2011_GeometryA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1920854
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=7043
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209172
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\omega_1$ be a circle of radius 6, and let $\omega_2$ be a circle of radius 5 that passes through the center $O$ of $\omega_1$ . Let $A$ and $B$ be the points of intersection of the two circles, and let $P$ be a point on major arc $AB$ of $\omega_2$ . Let $M$ and $N$ be the second intersections of $PA$ and $PB$ with $\omega_1$ , respectively. Let $S$ be the midpoint of $MN$ . As $P$ ranges over major arc $AB$ of $\omega_2$ , the minimum length of segment $SA$ is $a/b$ , where $a$ and $b$ are positive integers and $\gcd(a, b) = 1$ . Find $a+b$ .
