---
tag: BPCJDTMSWV
kind: problem
appearances:
  - at: pumac/2021/ab2
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2021 official paper
    url: https://pumac.princeton.edu/s/PUMaC_2021_Algebra_B.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h2834913
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73317
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263238
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Kris is asked to compute $\log_{10} (x^y)$ , where $y$ is a positive integer and $x$ is a positive real number. However, they misread this as $(\log_{10} x)^y$ , and compute this value. Despite the reading error, Kris still got the right answer. Given that $x > 10^{1.5}$ , determine the largest possible value of $y$ .
