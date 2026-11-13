---
tag: ATMK3MDDCX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2002 Romania Team Selection Test
    url: https://artofproblemsolving.com/community/c6h390064
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54505
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248005
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/2002
    source: hf-ai-mo-aops
    label: 2002 Romania Team Selection Test
---
Find the least positive real number $r$ with the following property:

Whatever four disks are considered, each with centre on the edges of a unit square and the sum of their radii equals $r$ , there exists an equilateral triangle which has its edges in three of the disks.

*Radu Gologan*
