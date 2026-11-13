---
tag: S1N0SPPW2B
kind: problem
appearances:
  - at: pumac/2012/na6
    primary: true
  - at: pumac/2012/nb8
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2012 official paper
    url: https://pumac.princeton.edu/s/PUMaC2012_NumberTheoryA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1927417
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8587
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210650
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p_1 = 2012$ and $p_n = 2012^{p_{n-1}}$ for $n > 1$ . Find the largest integer $k$ such that $p_{2012}- p_{2011}$ is divisible by $2011^k$ .
