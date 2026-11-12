---
tag: CBV3N1DJ9S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=11737
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two players play a game. They take turns naming three-digit numbers that have no zeros in their notation, and the sum of the digits is divisible by 9. At the same time, each subsequent number must start with the same digit that the previous number ends with, for example: $351-189$ - 936 - $621 \ldots$... Repeating numbers is not allowed. The player who cannot name the next number loses. Which player - the starting player or their opponent - can win regardless of the other's play?
