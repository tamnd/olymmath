---
tag: GK6ZNRCNFK
kind: problem
appearances:
  - at: pumac/2017/na5
    primary: true
  - at: pumac/2017/nb7
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
    url: https://artofproblemsolving.com/community/c6h1564524
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=15927
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217622
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p(n) = n^4-6n^2-160$ . If $a_n$ is the least odd prime dividing $q(n) = |p(n-30) \cdot p(n+30)|$ , find $\sum_{n=1}^{2017} a_n$ . ( $a_n = 3$ if $q(n) = 0$ .)
