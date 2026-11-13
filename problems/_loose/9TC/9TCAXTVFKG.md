---
tag: 9TCAXTVFKG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Bulgarian Winter Tournament
    url: https://artofproblemsolving.com/community/c6h3244049
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1556
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205066
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bg-winter/2024
    source: hf-ai-mo-aops
    label: 2024 Bulgarian Winter Tournament
---
Find all positive integers $k$ for which there exist positive integers $x, y$ , such that $\frac{x^ky}{x^2+y^2}$ is a prime.
