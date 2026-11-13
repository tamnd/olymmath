---
tag: 91ZTCWS9AG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Azerbaijan Senior NMO
    url: https://artofproblemsolving.com/community/c6h3566502
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=30763
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213030
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: az-mo/2020
    source: hf-ai-mo-aops
    label: 2020 Azerbaijan Senior NMO
---
Find all nonzero polynomials $P(x)$ with real coefficents, that satisfies $$ P(x)^3+3P(x)^2=P(x^3)-3P(-x) $$ for all real numbers $x$
