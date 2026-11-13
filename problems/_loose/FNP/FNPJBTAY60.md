---
tag: FNPJBTAY60
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Greece National Olympiad
    url: https://artofproblemsolving.com/community/c6h1205286
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=13933
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=215769
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: gr-hms/2016
    source: hf-ai-mo-aops
    label: 2016 Greece National Olympiad
---
Find all monic polynomials $P,Q$ which are non-constant, have real coefficients and they satisfy $2P(x)=Q(\frac{(x+1)^2}{2})-Q(\frac{(x-1)^2}{2})$ and $P(1)=1$ for all real $x$ .
