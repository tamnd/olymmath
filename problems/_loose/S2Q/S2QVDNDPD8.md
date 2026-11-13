---
tag: S2QVDNDPD8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 HK IMO Preliminary Selection Contest
    url: https://artofproblemsolving.com/community/c6h2343205
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=18860
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220391
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hk-pc/2020
    source: hf-ai-mo-aops
    label: 2020 HK IMO Preliminary Selection Contest
---
Let $k$ be an integer. If the equation $(x-1)|x+1|=x+\frac{k}{2020}$ has three distinct real roots, how many different possible values of $k$ are there?
