---
tag: 3DZ3E2CYV0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 Taiwan TST Round 1
    url: https://artofproblemsolving.com/community/c6h2047494
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=61115
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=253128
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2019
    source: hf-ai-mo-aops
    label: 2019 Taiwan TST Round 1
---
Given a triangle $ \triangle{ABC} $ with orthocenter $ H $ . On its circumcenter, choose an arbitrary point $ P $ (other than $ A,B,C $ ) and let $ M $ be the mid-point of $ HP $ . Now, we find three points $ D,E,F $ on the line $ BC, CA, AB $ , respectively, such that $ AP \parallel HD, BP \parallel HE, CP \parallel HF $ . Show that $ D, E, F, M $ are colinear.
