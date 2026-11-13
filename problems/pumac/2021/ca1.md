---
tag: QV0MK2J9YE
kind: problem
appearances:
  - at: pumac/2021/ca1
    primary: true
  - at: pumac/2021/cb3
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2021 official paper
    url: https://pumac.princeton.edu/s/PUMaC_2021_Combo_A.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h2825123
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73274
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263195
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Select two distinct diagonals at random from a regular octagon. What is the probability that the two diagonals intersect at a point strictly within the octagon? Express your answer as $a + b$ , where the probability is $\tfrac{a}{b}$ and $a$ and $b$ are relatively prime positive integers.
