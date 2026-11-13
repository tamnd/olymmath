---
tag: 9VNAWAR3XC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Miklós Schweitzer
    url: https://artofproblemsolving.com/community/c6h3271698
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=42051
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=238704
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: schweitzer/2023
    source: hf-ai-mo-aops
    label: 2023 Miklós Schweitzer
---
Let $K{}$ be an equilateral triangle of unit area, and choose $n{}$ independent random points uniformly from $K{}$ . Let $K_n$ be the intersection of all translations of $K{}$ that contain all the selected points. Determine the expected value of the area of $K_n.$
