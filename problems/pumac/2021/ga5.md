---
tag: GX3NG64B61
kind: problem
appearances:
  - at: pumac/2021/ga5
    primary: true
  - at: pumac/2021/gb7
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2021 official paper
    url: https://pumac.princeton.edu/s/GeoA_2021-1.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h2825850
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73303
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263224
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A pentagon has vertices labelled $A, B, C, D, E$ in that order counterclockwise, such that $AB$ , $ED$ are parallel and $\angle EAB = \angle ABD = \angle ACD = \angle CDA$ . Furthermore, suppose that $ AB = 8$ , $AC = 12$ , $AE = 10$ . If the area of triangle $CDE$ can be expressed as $\frac{a \sqrt{b}}{c}$ , where $a, b, c$ are integers so that $b$ is square free, and $a, c$ are relatively prime, find $a + b + c$ .
