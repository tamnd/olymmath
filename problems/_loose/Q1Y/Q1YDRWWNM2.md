---
tag: Q1YDRWWNM2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 Peru Cono Sur TST
    url: https://artofproblemsolving.com/community/c6h3107353
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=50427
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246062
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pe-conosur-tst/2019
    source: hf-ai-mo-aops
    label: 2019 Peru Cono Sur TST
---
Let $A$ be the number of ways in which the set $\{ 1, 2, . . . , n\}$ can be partitioned into non-empty subsets. Let $B$ be the number of ways in which the set $\{ 1, 2, . . . , n, n + 1 \}$ can be partitioned into non-empty subsets such that consecutive numbers belong to distinct subsets. Partitions that differ only in the order of the subsets are considered equal. Prove that $A = B$ .
