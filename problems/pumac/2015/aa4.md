---
tag: KBVSJZYEBS
kind: problem
appearances:
  - at: pumac/2015/aa4
    primary: true
  - at: pumac/2015/ab6
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
    url: https://artofproblemsolving.com/community/c6h1165945
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=12956
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=214863
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define the sequence $a_i$ as follows: $a_1 = 1, a_2 = 2015$ , and $a_n = \frac{na_{n-1}^2}{a_{n-1}+na_{n-2}}$ for $n > 2$ . What is the least $k$ such that $a_k < a_{k-1}$ ?
