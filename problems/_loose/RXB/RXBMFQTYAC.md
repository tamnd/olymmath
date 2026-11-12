---
tag: RXBMFQTYAC
kind: problem
type: answer
answer: 3k,k\in\mathbb{N}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=18442
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a natural number $N$. Vera performs the following operations with it: first, she adds 3 until the resulting number is divisible by 5 (if $N$ is initially divisible by 5, nothing needs to be added). The resulting number is then divided by 5. She then performs the same operations with the new number, and so on. From which numbers can 1 not be obtained by these operations?
