---
tag: BK431QWMCE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020-21 IOQM India
    url: https://artofproblemsolving.com/community/c6h2419214
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=42267
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=238847
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-prmo-ioqm/2020
    source: hf-ai-mo-aops
    label: 2020-21 IOQM India
---
Find the number of pairs $(a,b)$ of natural nunbers such that $b$ is a 3-digit number, $a+1$ divides $b-1$ and $b$ divides $a^{2} + a + 2$ .
