---
tag: E8WWWV27AM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 BMT
    url: https://artofproblemsolving.com/community/c6h3164621
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70461
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261400
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bmt/2022
    source: hf-ai-mo-aops
    label: 2022 BMT
---
Tej writes $2, 3, ..., 101$ on a chalkboard. Every minute he erases two numbers from the board, $x$ and $y$ , and writes $xy/(x+y-1)$ . If Tej does this for $99$ minutes until only one number remains, what is its maximum possible value?
