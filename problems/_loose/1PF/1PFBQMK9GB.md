---
tag: 1PFBQMK9GB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2001 Cono Sur Olympiad
    url: https://artofproblemsolving.com/community/c6h420910
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=22206
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=223390
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cono-sur/2001
    source: hf-ai-mo-aops
    label: 2001 Cono Sur Olympiad
---
Find all positive integers $m$ for which $2001\cdot S (m) = m$ where $S(m)$ denotes the sum of the digits of $m$ .
