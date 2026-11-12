---
tag: JTXTP24VS7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1945 Moscow Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1878190
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=56584
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=26233
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-moscow/1945
    source: hf-ai-mo-aops
    label: 1945 Moscow Mathematical Olympiad
---
Given the $6$ digits: $0, 1, 2, 3, 4, 5$ . Find the sum of all even four-digit numbers which can be expressed with the help of these figures (the same figure can be repeated).
