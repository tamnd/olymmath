---
tag: ND0SBDJ45S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Romania EGMO TST
    url: https://artofproblemsolving.com/community/c6h2781220
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=394
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204069
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-egmo-tst/2022
    source: hf-ai-mo-aops
    label: 2022 Romania EGMO TST
---
A finite set $M$ of real numbers has the following properties: $M$ has at least $4$ elements, and there exists a bijective function $f:M\to M$ , different from the identity, such that $ab\leq f(a)f(b)$ for all $a\neq b\in M.$ Prove that the sum of the elements of $M$ is $0.$
