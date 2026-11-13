---
tag: AMK7CG8ENS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h2378381
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=19313
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220856
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2020
    source: hf-ai-mo-aops
    label: 2020 Online Math Open Problems
---
On a $9\times 9$ square lake composed of unit squares, there is a $2\times 4$ rectangular iceberg also composed of unit squares (it could be in either orientation; that is, it could be $4\times 2$ as well). The sides of the iceberg are parallel to the sides of the lake. Also, the iceberg is invisible. Lily is trying to sink the iceberg by firing missiles through the lake. Each missile fires through a row or column, destroying anything that lies in its row or column. In particular, if Lily hits the iceberg with any missile, she succeeds. Lily has bought $n$ missiles and will fire all $n$ of them at once. Let $N$ be the smallest possible value of $n$ such that Lily can guarantee that she hits the iceberg. Let $M$ be the number of ways for Lily to fire $N$ missiles and guarantee that she hits the iceberg. Compute $100M+N$ .

*Proposed by Brandon Wang*
