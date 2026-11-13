---
tag: Z8CTMRVMNG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2002 IberoAmerican
    url: https://artofproblemsolving.com/community/c6h83713
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=23000
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=148679
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ibero/2002
    source: hf-ai-mo-aops
    label: 2002 IberoAmerican
---
The integer numbers from $1$ to $2002$ are written in a blackboard in increasing order $1,2,\ldots, 2001,2002$ . After that, somebody erases the numbers in the $ (3k+1)-th$ places i.e. $(1,4,7,\dots)$ . After that, the same person erases the numbers in the $(3k+1)-th$ positions of the new list (in this case, $2,5,9,\ldots$ ). This process is repeated until one number remains. What is this number?
