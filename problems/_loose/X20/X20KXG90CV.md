---
tag: X20KXG90CV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Mongolian Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3297630
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1987
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0001.parquet#row=186
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo/2024
    source: hf-ai-mo-aops
    label: 2024 Mongolian Mathematical Olympiad
  - at: mn-mo
    source: hf-mathnet
    label: Mongolia Mongolian Mathematical Olympiad
---
Find all triples $(a, b, c)$ of positive integers such that $a \leq b$ and $$a!+b!=c^4+2024$$

*Proposed by Otgonbayar Uuye.*
