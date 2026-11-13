---
tag: ZYS3HNVAP7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h611751
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=11663
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213620
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2014
    source: hf-ai-mo-aops
    label: 2014 Online Math Open Problems
---
Carl has a rectangle whose side lengths are positive integers. This rectangle has the property that when he increases the width by 1 unit and decreases the length by 1 unit, the area increases by $x$ square units. What is the smallest possible positive value of $x$ ?

*Proposed by Ray Li*
