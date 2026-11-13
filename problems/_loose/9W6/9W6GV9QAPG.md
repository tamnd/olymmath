---
tag: 9W6GV9QAPG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2005 Irish Math Olympiad
    url: https://artofproblemsolving.com/community/c6h287205
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44850
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241088
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo/2005
    source: hf-ai-mo-aops
    label: 2005 Irish Math Olympiad
---
Let $ x$ be an integer and $ y,z,w$ be odd positive integers. Prove that $ 17$ divides $ x^{y^{z^w}}-x^{y^z}$ .
