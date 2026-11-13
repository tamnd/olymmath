---
tag: SNS1NKWMGR
kind: problem
type: answer
answer: 2^{n}-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=182192
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
At point $A$, there are $n$ disks $S_{i}$ with diameters $d_{i}(i=1 ; 2 ; \ldots ; n)$ stacked on top of each other such that $d_{j}<d_{k}$ for $j<k$.

They are to be moved one by one to point $B$, with point $C$ being available as an "intermediate storage".

The condition to be observed is that a larger disk must never be placed on a smaller one.

How many transport steps are minimally required?
