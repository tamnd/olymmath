---
tag: HHSBHXDNKR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h516626
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10048
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212044
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2013
    source: hf-ai-mo-aops
    label: 2013 Online Math Open Problems
---
Dirock has a very neat rectangular backyard that can be represented as a $32\times 32$ grid of unit squares. The rows and columns are each numbered $1,2,\ldots, 32$ . Dirock is very fond of rocks, and places a rock in every grid square whose row and column number are both divisible by $3$ . Dirock would like to build a rectangular fence with vertices at the centers of grid squares and sides parallel to the sides of the yard such that

- The fence does not pass through any grid squares containing rocks;
- The interior of the fence contains exactly 5 rocks.

In how many ways can this be done?

*Ray Li*
