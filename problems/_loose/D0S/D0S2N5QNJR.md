---
tag: D0S2N5QNJR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2001 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h590953
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73855
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263342
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: smt/2001
    source: hf-ai-mo-aops
    label: 2001 Stanford Mathematics Tournament
---
For what values of $a$ does the system of equations
$$x^2 = y^2,(x-a)^2 +y^2 = 1$$have exactly 2 solutions?
