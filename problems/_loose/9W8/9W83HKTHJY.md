---
tag: 9W83HKTHJY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 Belarusian National Olympiad
    url: https://artofproblemsolving.com/community/c6h1334409
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=31232
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230678
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: by-mo/2008
    source: hf-ai-mo-aops
    label: 2008 Belarusian National Olympiad
---
Find all pairs $(n,m)$ $m\geq n \geq 3$ , for which exist such table $n\times m$ with numbers in every cell, and sum of numbers in every $2\times 2$ is negative and sum of numbers in every $3\times 3$ is positive.
