---
tag: YSREG88B07
kind: problem
appearances:
  - at: pumac/2017/aa6
    primary: true
  - at: pumac/2017/ab8
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2017 official paper
    url: https://pumac.princeton.edu/s/PUMaC2017_Algebra_A.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1549830
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=15900
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217595
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Together, Kenneth and Ellen pick a real number $a$ . Kenneth subtracts $a$ from every thousandth root of unity (that is, the thousand complex numbers $\omega$ for which $\omega^{1000}=1$ ) then inverts each, then sums the results. Ellen inverts every thousandth root of unity, then subtracts $a$ from each, and then sums the results. They are surprised to find that they actually got the same answer! How many possible values of $a$ are there?
