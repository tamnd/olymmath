---
tag: XCBDSP6S7T
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Turkey MO (2nd round)
    url: https://artofproblemsolving.com/community/c6h1581076
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=62472
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=254309
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tr-mo/2017
    source: hf-ai-mo-aops
    label: 2017 Turkey MO (2nd round)
---
A wedding is going to be held in a city with $25$ types of meals, to which some of the $2017$ citizens will be invited. All of the citizens like some meals and each meal is liked by at least one person. A " $suitable$ $list$ " is a set of citizens, such that each meal is liked by at least one person in the set. A " $kamber$ $group$ " is a set that contains at least one person from each " $suitable$ $list$ ". Given a " $kamber$ $group$ ", which has no subset (other than itself) that is also a " $kamber$ $group$ ", prove that there exists a meal, which is liked by everyone in the group.
