---
tag: X8BB3ETY3F
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h494354
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8355
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210420
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2012
    source: hf-ai-mo-aops
    label: 2012 NIMO Problems
---
When Eva counts, she skips all numbers containing a digit divisible by 3. For example, the first ten numbers she counts are 1, 2, 4, 5, 7, 8, 11, 12, 14, 15. What is the $100^{\text{th}}$ number she counts?

*Proposed by Eugene Chen*
