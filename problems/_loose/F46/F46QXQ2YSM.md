---
tag: F46QXQ2YSM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 India IMO Training Camp
    url: https://artofproblemsolving.com/community/c6h1876793
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=17775
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=110712
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2019
    source: hf-ai-mo-aops
    label: 2019 India IMO Training Camp
---
Determine all non-constant monic polynomials $f(x)$ with integer coefficients for which there exists a natural number $M$ such that for all $n \geq M$ , $f(n)$ divides $f(2^n) - 2^{f(n)}$
*Proposed by Anant Mudgal*
