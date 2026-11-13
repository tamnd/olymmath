---
tag: QT84VVZAFA
kind: problem
appearances:
  - at: pumac/2015/aa6
    primary: true
  - at: pumac/2015/ab7
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2015 official paper
    url: https://pumac.princeton.edu/s/PUMaC2015_AlgebraA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1165946
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=12957
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=214864
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We define the function $f(x,y)=x^3+(y-4)x^2+(y^2-4y+4)x+(y^3-4y^2+4y)$ . Then choose any distinct $a, b, c \in \mathbb{R}$ such that the following holds: $f(a,b)=f(b,c)=f(c,a)$ . Over all such choices of $a, b, c$ , what is the maximum value achieved by
$$\min(a^4 - 4a^3 + 4a^2, b^4 - 4b^3 + 4b^2, c^4 - 4c^3 + 4c^2)?$$
