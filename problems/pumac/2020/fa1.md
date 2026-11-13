---
tag: MNVJ6552MK
kind: problem
appearances:
  - at: pumac/2020/fa1
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2020 official paper
    url: https://pumac.princeton.edu/s/2020_Indiv_Finals_A.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h2747874
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73246
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263167
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_1, . . . , a_{2020}$ be a sequence of real numbers such that $a_1 = 2^{-2019}$ , and $a^2_{n-1}a_n = a_n-a_{n-1}$ .
Prove that $a_{2020} <\frac{1}{2^{2019} -1}$
