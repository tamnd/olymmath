---
tag: 6X75HAPVCQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AI-MO AoPS
    url: https://huggingface.co/datasets/project-numina/aops
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231581
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: br-obm/2021
    source: hf-ai-mo-aops
    label: 2021 Brazil National Olympiad
---
A triple of positive integers $(a,b,c)$ is *brazilian* if $$ a|bc+1 $$ $$ b|ac+1 $$ $$ c|ab+1 $$ Determine all the brazilian triples.
