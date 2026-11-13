---
tag: W2RWHCD5K3
kind: problem
appearances:
  - at: pumac/2012/fb2
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2012 official paper
    url: https://pumac.princeton.edu/s/PUMaC2012_FinalsB.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1921507
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8559
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210622
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $O_1, O_2, ..., O_{2012}$ be $2012$ circles in the plane such that no circle intersects or contains anyother circle and no two circles have the same radius. For each $1\le i < j \le 2012$ , let $P_{i,j}$ denotethe point of intersection of the two external tangent lines to $O_i$ and $O_j$ , and let $T$ be the set of all $P_{i,j}$ (so $|T|=\binom {2012}{2}= 2023066$ ). Suppose there exists a subset $S\subset T$ with $|S|= 2021056$ such that all points in $S$ lie on the same line. Prove that all points in $T$ lie on the same line.
