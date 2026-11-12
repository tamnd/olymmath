---
tag: BYXNZM0G2N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=6911
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's call a natural number mountainous if its representation contains a non-edge digit (called the peak) that is greater than all others, and all other digits are non-zero and initially non-strictly increase (i.e., each subsequent digit is greater than or equal to the previous one) up to the peak, and then non-strictly decrease (i.e., each subsequent digit is less than or equal to the previous one). For example, the number 12243 is mountainous, while the numbers 3456 and 1312 are not. Prove that the sum of all hundred-digit mountainous numbers is a composite number. (S. Berlov)
