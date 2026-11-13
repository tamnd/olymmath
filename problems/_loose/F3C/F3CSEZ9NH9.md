---
tag: F3CSEZ9NH9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1973 IMO Shortlist
    url: https://artofproblemsolving.com/community/c6h368130
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=25173
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=225912
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: isl/1973
    source: hf-ai-mo-aops
    label: 1973 IMO Shortlist
---
Let $P$ be a set of $7$ different prime numbers and $C$ a set of $28$ different composite numbers each of which is a product of two (not necessarily different) numbers from $P$ . The set $C$ is divided into $7$ disjoint four-element subsets such that each of the numbers in one set has a common prime divisor with at least two other numbers in that set. How many such partitions of $C$ are there ?
