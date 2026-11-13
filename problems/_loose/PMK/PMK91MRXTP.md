---
tag: PMK91MRXTP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1935 Moscow Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1877162
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=56505
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249403
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-moscow/1935
    source: hf-ai-mo-aops
    label: 1935 Moscow Mathematical Olympiad
---
How many ways are there of representing a positive integer $n$ as the sum of three positive integers? Representations which differ only in the order of the summands are considered to be distinct.
