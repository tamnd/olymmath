---
tag: SMECJPCMSQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Slovenia National Olympiad
    url: https://artofproblemsolving.com/community/c6h377551
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=5680
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207825
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: si-mo/2010
    source: hf-ai-mo-aops
    label: 2010 Slovenia National Olympiad
---
Find the smallest three-digit number such that the following holds:
If the order of digits of this number is reversed and the number obtained by this is added to the original number, the resulting number consists of only odd digits.
