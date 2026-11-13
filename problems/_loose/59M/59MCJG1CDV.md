---
tag: 59MCJG1CDV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=181736
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The square of a two-digit number can be easily calculated in your head. The number is rounded up to the next full ten and multiplied by the number obtained as follows: From the original number, subtract the number by which it was previously increased. Then you still need to add the square of this "increase number."

For example: $26^{2}=30 \cdot 22+4^{2}=660+16=676$

Explain why this method is possible for all two-digit numbers!
