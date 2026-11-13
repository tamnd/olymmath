---
tag: 3JR65FXN6W
kind: problem
appearances:
  - at: pumac/2017/fb2
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2017 official paper
    url: https://pumac.princeton.edu/s/PUMaC2017_Finals_B.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1918659
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=15954
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217649
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_1(x), a_2(x)$ , and $a_3(x)$ be three polynomials with integer coefficients such that every polynomial with integer coefficients can be written in the form $p_1(x)a_1(x) + p_2(x)a_2(x) + p_3(x)a_3(x)$ for some polynomials $p_1(x), p_2(x), p_3(x)$ with integer coefficients. Show that every polynomial is of the form $p_1(x)a_1(x)^2 + p_2(x)a_2(x)^2 + p_3(x)a_3(x)^2$ for some polynomials $p_1(x), p_2(x), p_3(x)$ with integer coefficients.
