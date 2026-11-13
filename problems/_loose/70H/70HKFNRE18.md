---
tag: 70HKFNRE18
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261504
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Compute the lowest positive integer $k$ such that none of the numbers in the sequence $$\{1, 1 +k, 1 + k + k^2
, 1 + k + k^2 + k^3, ... \}$$ are prime.
