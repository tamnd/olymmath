---
tag: MV2SXZBDCA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Tournament of Towns
    url: https://artofproblemsolving.com/community/c6h2022145
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28926
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228936
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2011 Tournament of Towns
---
Among a group of programmers, every two either know each other or do not know each other. Eleven of them are geniuses. Two companies hire them one at a time, alternately, and may not hire someone already hired by the other company. There are no conditions on which programmer a company may hire in the first round. Thereafter, a company may only hire a programmer who knows another programmer already hired by that company. Is it possible for the company which hires second to hire ten of the geniuses, no matter what the hiring strategy of the other company may be?
