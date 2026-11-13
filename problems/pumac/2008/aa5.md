---
tag: C7Y2MTR9XA
kind: problem
appearances:
  - at: pumac/2008/aa5
    primary: true
  - at: pumac/2008/ab8
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2008 official paper
    url: https://pumac.princeton.edu/s/PUMaC2008_AlgebraA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2008 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1921055
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73154
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263075
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $H_k =\Sigma_{i=1}^k \frac{1}{i}$ for all positive integers $k$ . Find an closed-form expression for $\Sigma_{i=1}^k H_i$ in terms of $n$ and $H_n$ .
