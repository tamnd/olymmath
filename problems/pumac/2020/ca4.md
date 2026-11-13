---
tag: E64N5FD7XC
kind: problem
appearances:
  - at: pumac/2020/ca4
    primary: true
  - at: pumac/2020/cb5
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2020 official paper
    url: https://pumac.princeton.edu/s/2020__PUMaC_Combinatorics_A-2.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h2747884
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73253
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263174
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $P$ be the power set of $\{1, 2, 3, 4\}$ (meaning the elements of P are the subsets of $\{1, 2, 3, 4\}$ ). How many subsets $S$ of $P$ are there such that no two distinct integers $a, b \in \{1, 2, 3, 4\}$ appear together in exactly one element of $S$ ?
