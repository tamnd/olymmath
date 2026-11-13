---
tag: V3RPP3RGYH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 SMO
    url: https://artofproblemsolving.com/community/c6h2251625
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=19438
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220979
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sg-smo/2020
    source: hf-ai-mo-aops
    label: 2020 SMO
---
Adam has a single stack of $3 \cdot 2^n$ rocks, where $n$ is a nonnegative integer. Each move, Adam can either split an existing stack into two new stacks whose sizes differ by $0$ or $1$ , or he can combine two existing stacks into one new stack.

Adam keeps performing such moves until he eventually gets at least one stack with $2^n$ rocks. Find, with proof, the minimum possible number of times Adam could have combined two stacks.

*Proposed by Anthony Wang*
