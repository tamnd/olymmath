---
tag: 1CMFX6QCPH
kind: problem
appearances:
  - at: pumac/2020/na6
    primary: true
  - at: pumac/2020/nb8
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2020 official paper
    url: https://pumac.princeton.edu/s/PuMaC_Number_Theory_A_2020.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h2747861
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73238
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263159
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the number of ordered pairs of integers $(x, y)$ such that $2167$ divides $3x^2 + 27y^2 + 2021$ with $0 \le x, y \le 2166$ .
