---
tag: MTEFBS9VP9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2007 Iran MO (2nd Round)
    url: https://artofproblemsolving.com/community/c6h368218
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44102
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240375
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo-r2/2007
    source: hf-ai-mo-aops
    label: 2007 Iran MO (2nd Round)
---
Two vertices of a cube are $A,O$ such that $AO$ is the diagonal of one its faces. A $n-$ run is a sequence of $n+1$ vertices of the cube such that each $2$ consecutive vertices in the sequence are $2$ ends of one side of the cube. Is the $1386-$ runs from $O$ to itself less than $1386-$ runs from $O$ to $A$ or more than it?
