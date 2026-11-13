---
tag: VFKS06Z4JC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 Irish Math Olympiad
    url: https://artofproblemsolving.com/community/c6h204253
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44875
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241113
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo/2008
    source: hf-ai-mo-aops
    label: 2008 Irish Math Olympiad
---
A triangle $ ABC$ has an obtuse angle at $ B$ . The perpindicular at $ B$ to $ AB$ meets $ AC$ at $ D$ , and $ |CD| = |AB|$ .
Prove that $ |AD|^2 = |AB|.|BC|$ if and only if $ \angle CBD = 30^\circ$ .
