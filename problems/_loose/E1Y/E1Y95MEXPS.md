---
tag: E1Y95MEXPS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 Greece National Olympiad
    url: https://artofproblemsolving.com/community/c6h446302
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=40568
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237442
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: gr-hms/2008
    source: hf-ai-mo-aops
    label: 2008 Greece National Olympiad
---
Find all integers $x$ and prime numbers $p$ satisfying $x^8 + 2^{2^x+2} = p$ .
