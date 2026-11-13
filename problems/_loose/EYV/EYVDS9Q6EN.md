---
tag: EYVDS9Q6EN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1978 All Soviet Union Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1869920
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55291
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248658
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/1978
    source: hf-ai-mo-aops
    label: 1978 All Soviet Union Mathematical Olympiad
---
Given $n$ nonintersecting segments in the plane. Not a pair of those belong to the same straight line. We want to add several segments, connecting the ends of given ones, to obtain one nonselfintersecting broken line. Is it always possible?
