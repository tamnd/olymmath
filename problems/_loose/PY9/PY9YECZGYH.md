---
tag: PY9YECZGYH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1980 IMO
    url: https://artofproblemsolving.com/community/c6h411711
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=23552
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=226408
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: imo/1980
    source: hf-ai-mo-aops
    label: 1980 IMO
---
Prove that if $(a,b,c,d)$ are positive integers such that $(a+2^{\frac13}b+2^{\frac23}c)^2=d$ then $d$ is a perfect square (i.e is the square of a positive integer).
