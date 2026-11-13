---
tag: AA815YN5XY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h110419
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44300
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240573
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2006
    source: hf-ai-mo-aops
    label: 2006 Iran MO (3rd Round)
---
Let $D$ be a family of $s$ -element subsets of $\{1.\ldots,n\}$ such that every $k$ members of $D$ have non-empty intersection. Denote by $D(n,s,k)$ the maximum cardinality of such a family.
a) Find $D(n,s,4)$ .
b) Find $D(n,s,3)$ .
