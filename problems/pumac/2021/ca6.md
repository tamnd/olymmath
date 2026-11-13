---
tag: S8NHC322TK
kind: problem
appearances:
  - at: pumac/2021/ca6
    primary: true
  - at: pumac/2021/cb8
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
    url: https://artofproblemsolving.com/community/c6h2825134
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73278
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263199
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Alice, Bob, and Carol are playing a game. Each turn, one of them says one of the $3$ players' names, chosen from {Alice, Bob, Carol} uniformly at random. Alice goes first, Bob goes second, Carol goes third, and they repeat in that order. Let $E$ be the expected number of names that are have been said when, for the first time, all $3$ names have been said twice. If $E = \tfrac{m}{n}$ for relatively prime positive integers $m$ and $n$ , find $m + n$ . (Include the last name to be said twice in your count.)
