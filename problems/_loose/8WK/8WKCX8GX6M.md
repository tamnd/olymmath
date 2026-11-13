---
tag: 8WKCX8GX6M
kind: problem
type: answer
answer: (a, b) = (2^i, 2^i) \text{ where } i \geq 0
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242868
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For what pairs of natural numbers $(a, b)$ is the expression $$(a^6 + 21a^4b^2 + 35a^2b^4 + 7b^6) (b^6 + 21b^4a^2 + 35b^2a^4 + 7a^6)$$ the power of a prime number?
