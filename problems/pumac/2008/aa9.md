---
tag: 8QD49RHK6F
kind: problem
appearances:
  - at: pumac/2008/aa9
    primary: true
  - at: pumac/2008/ab10
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2008 official paper
    url: https://pumac.princeton.edu/s/PUMaC2008_AlgebraA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2008 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1921063
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73158
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263079
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If $p(x)$ is a polynomial with integer coeffcients, let $q(x) = \frac{p(x)}{x(1-x)}$ . If $q(x) = q\left(\frac{1}{1-x}\right)$ for every $x \ne 0$ , and $p(2) = -7, p(3) = -11$ , find $p(10)$ .
