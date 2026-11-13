---
tag: R8MZ8ZK5E8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1989 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h2485110
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28102
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228450
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 1989 Tournament Of Towns
---
Consider all the possible subsets of the set $\{1,2,..., N\}$ which do not contain any consecutive numbers. Prove that the sum of the squares of the products of the numbers in these subsets is $(N + 1)! - 1$ .

(Based on idea of R.P. Stanley)
