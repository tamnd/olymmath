---
tag: 7GSBR02PEX
kind: problem
appearances:
  - at: pumac/2023/gb2
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2023 official paper
    url: https://pumac.princeton.edu/s/Geometry_B_2023.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h3275776
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73423
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268583
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The area of the largest square that can be inscribed in a regular hexagon with sidelength $1$ can be expressed as $a-b\sqrt{c}$ where $c$ is not divisible by the square of any prime. Find $a+b+c$ .
