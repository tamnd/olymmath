---
tag: 9CK7DVKBP0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 CMIMC
    url: https://artofproblemsolving.com/community/c6h2471747
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70610
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261897
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2021
    source: hf-ai-mo-aops
    label: 2021 CMIMC
---
Let $P(x), Q(x), $ and $R(x)$ be three monic quadratic polynomials with only real roots, satisfying $$ P(Q(x))=(x-1)(x-3)(x-5)(x-7) $$ $$ Q(R(x))=(x-2)(x-4)(x-6)(x-8) $$ for all real numbers $x.$ What is $P(0)+Q(0)+R(0)?$ *Proposed by Kyle Lee*
