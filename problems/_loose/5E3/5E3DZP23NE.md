---
tag: 5E3DZP23NE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 CMIMC
    url: https://artofproblemsolving.com/community/c6h1225750
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=13824
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=215661
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2016
    source: hf-ai-mo-aops
    label: 2016 CMIMC
---
Let $S$ be the set containing all positive integers whose decimal representations contain only 3's and 7's, have at most 1998 digits, and have at least one digit appear exactly 999 times. If $N$ denotes the number of elements in $S$ , find the remainder when $N$ is divided by 1000.
