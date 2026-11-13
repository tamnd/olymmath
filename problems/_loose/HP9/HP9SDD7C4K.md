---
tag: HP9SDD7C4K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2003 Iran MO (2nd round)
    url: https://artofproblemsolving.com/community/c6h369949
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44079
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240352
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo-r2/2003
    source: hf-ai-mo-aops
    label: 2003 Iran MO (2nd round)
---
In a village, there are $n$ houses with $n>2$ and all of them are not collinear. We want to generate a water resource in the village. For doing this, point $A$ is *better* than point $B$ if the sum of the distances from point $A$ to the houses is less than the sum of the distances from point $B$ to the houses. We call a point *ideal* if there doesn't exist any *better* point than it. Prove that there exist at most $1$ *ideal* point to generate the resource.
