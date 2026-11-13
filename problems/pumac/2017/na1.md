---
tag: BMF4SSP1V3
kind: problem
appearances:
  - at: pumac/2017/na1
    primary: true
  - at: pumac/2017/nb3
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2017 official paper
    url: https://pumac.princeton.edu/s/PUMaC2017_NT_A.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1564513
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=15923
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217618
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Shaq sees the numbers $1$ through $2017$ written on a chalkboard. He repeatedly chooses three numbers, erases them, and writes one plus their median. (For instance, if he erased $-2, -1, 0$ he would replace them with $0$ .) If $M$ is the maximum possible final value remaining on the board, and if m is the minimum, compute $M - m$ .
