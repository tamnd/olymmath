---
tag: V7FBH6GPQA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2001 Estonia National Olympiad
    url: https://artofproblemsolving.com/community/c6h2028102
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=38682
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236028
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ee-mo/2001
    source: hf-ai-mo-aops
    label: 2001 Estonia National Olympiad
---
Dividing a three-digit number by the number obtained from it by swapping its first and last digit we get $3$ as the quotient and the sum of digits of the original number as the remainder. Find all three-digit numbers with this property.
