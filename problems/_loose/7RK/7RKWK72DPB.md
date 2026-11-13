---
tag: 7RKWK72DPB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 Singapore Senior Math Olympiad
    url: https://artofproblemsolving.com/community/c6h359961
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=4150
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206334
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sg-smo/2009
    source: hf-ai-mo-aops
    label: 2009 Singapore Senior Math Olympiad
---
Given that $ a,b,c, x_1, x_2, ... , x_5 $ are real positives such that $ a+b+c=1 $ and $ x_1.x_2.x_3.x_4.x_5 = 1 $ .
Prove that $$ (ax_1^2+bx_1+c)(ax_2^2+bx_2+c)...(ax_5^2+bx_5+c)\ge 1$$
