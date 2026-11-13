---
tag: WNB8FGHG4B
kind: problem
appearances:
  - at: pumac/2012/aa5
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2012 official paper
    url: https://pumac.princeton.edu/s/PUMaC2012_AlgebraA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1927398
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8574
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210637
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
What is the smallest natural number $n$ greater than $2012$ such that the polynomial $f(x) =(x^6 + x^4)^n - x^{4n} - x^6$ is divisible by $g(x) = x^4 + x^2 + 1$ ?
