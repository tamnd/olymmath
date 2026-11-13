---
tag: DMGJR011SR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2005 Iran Team Selection Test
    url: https://artofproblemsolving.com/community/c6h34208
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44533
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240771
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-tst/2005
    source: hf-ai-mo-aops
    label: 2005 Iran Team Selection Test
---
Suppose there are $n$ distinct points on plane. There is circle with radius $r$ and center $O$ on the plane. At least one of the points are in the circle. We do the following instructions. At each step we move $O$ to the baricenter of the point in the circle. Prove that location of $O$ is constant after some steps.
