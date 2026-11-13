---
tag: WY07FSD8WG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Peru Cono Sur TST
    url: https://artofproblemsolving.com/community/c6h3107948
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=50403
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246058
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pe-conosur-tst/2016
    source: hf-ai-mo-aops
    label: 2016 Peru Cono Sur TST
---
Find all positive integers $n$ for which $2^n + 2021n$ is a perfect square.
