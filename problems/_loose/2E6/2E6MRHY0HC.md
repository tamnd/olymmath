---
tag: 2E6MRHY0HC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2001 Irish Math Olympiad
    url: https://artofproblemsolving.com/community/c6h287033
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44811
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241049
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo/2001
    source: hf-ai-mo-aops
    label: 2001 Irish Math Olympiad
---
Find all nonnegative real numbers $ x$ for which $ \sqrt[3]{13+\sqrt{x}}+\sqrt[3]{13-\sqrt{x}}$ is an integer.
