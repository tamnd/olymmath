---
tag: 2012C9B58C
kind: problem
appearances:
  - at: pumac/2020/aa8
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2020 official paper
    url: https://pumac.princeton.edu/s/2020AlgebraAQuestions.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h2747853
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73230
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263151
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_n$ be the number of unordered sets of three distinct bijections $f, g, h : \{1, 2, ..., n\} \to \{1, 2, ..., n\}$ such that the composition of any two of the bijections equals the third. What is the largest value in the sequence $a_1, a_2, ...$ which is less than $2021$ ?
