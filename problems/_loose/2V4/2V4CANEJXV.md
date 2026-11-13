---
tag: 2V4CANEJXV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 CMIMC
    url: https://artofproblemsolving.com/community/c6h2471744
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70608
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261895
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
How many four-digit positive integers $\overline{a_1a_2a_3a_4}$ have only nonzero digits and have the property that $|a_i-a_j| \neq 1$ for all $1 \leq i<j \leq 4?$ *Proposed by Kyle Lee*
