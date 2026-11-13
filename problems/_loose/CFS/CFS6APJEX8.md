---
tag: CFS6APJEX8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2004 India IMO Training Camp
    url: https://artofproblemsolving.com/community/c6h53040
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=42209
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=238794
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2004
    source: hf-ai-mo-aops
    label: 2004 India IMO Training Camp
---
Suppose the polynomial $P(x) \equiv x^3 + ax^2 + bx +c$ has only real zeroes and let $Q(x) \equiv 5x^2 - 16x + 2004$ . Assume that $P(Q(x)) = 0$ has no real roots. Prove that $P(2004) > 2004$
