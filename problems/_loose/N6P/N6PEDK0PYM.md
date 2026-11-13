---
tag: N6PEDK0PYM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 Singapore Senior Math Olympiad
    url: https://artofproblemsolving.com/community/c6h1872159
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=59378
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=160402
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sg-smo/2008
    source: hf-ai-mo-aops
    label: 2008 Singapore Senior Math Olympiad
---
Let $ABCD$ be a trapezium with $AD // BC$ . Suppose $K$ and $L$ are, respectively, points on the sides $AB$ and $CD$ such that $\angle BAL = \angle CDK$ . Prove that $\angle BLA = \angle CKD$ .
