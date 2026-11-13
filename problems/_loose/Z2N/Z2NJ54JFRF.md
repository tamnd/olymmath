---
tag: Z2NJ54JFRF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 Iran Team Selection Test
    url: https://artofproblemsolving.com/community/c6h84260
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44540
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240778
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-tst/2006
    source: hf-ai-mo-aops
    label: 2006 Iran Team Selection Test
---
Let $G$ be a tournoment such that it's edges are colored either red or blue.
Prove that there exists a vertex of $G$ like $v$ with the property that, for every other vertex $u$ there is a mono-color directed path from $v$ to $u$ .
