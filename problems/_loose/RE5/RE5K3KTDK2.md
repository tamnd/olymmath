---
tag: RE5K3KTDK2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1989 Romania Team Selection Test
    url: https://artofproblemsolving.com/community/c6h2009109
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54317
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247817
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/1989
    source: hf-ai-mo-aops
    label: 1989 Romania Team Selection Test
---
Find all monic polynomials $P(x),Q(x)$ with integer coefficients such that $Q(0) =0$ and $P(Q(x)) = (x-1)(x-2)...(x-15)$ .
