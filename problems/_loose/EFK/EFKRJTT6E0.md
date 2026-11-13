---
tag: EFKRJTT6E0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h585511
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=11636
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213593
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
The integers $1, 2, \dots, n$ are written in order on a long slip of paper. The slip is then cut into five pieces, so that each piece consists of some (nonempty) consecutive set of integers. The averages of the numbers on the five slips are $1234$ , $345$ , $128$ , $19$ , and $9.5$ in some order. Compute $n$ .

*Proposed by Evan Chen*
