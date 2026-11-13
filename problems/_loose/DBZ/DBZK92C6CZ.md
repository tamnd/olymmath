---
tag: DBZK92C6CZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 AIME
    url: https://artofproblemsolving.com/community/c6h3248112
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1386
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=147837
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: aime
    source: hf-ai-mo-aops
    label: 2024 AIME
---
Consider the paths of length $16$ that go from the lower left corner to the upper right corner of an $8\times 8$ grid. Find the number of such paths that change direction exactly $4$ times.
