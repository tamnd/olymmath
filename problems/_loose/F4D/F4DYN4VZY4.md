---
tag: F4DYN4VZY4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h522313
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=9953
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=211949
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2013
    source: hf-ai-mo-aops
    label: 2013 NIMO Problems
---
Let $ABCD$ be a square of side length $6$ . Points $E$ and $F$ are selected on rays $AB$ and $AD$ such that segments $EF$ and $BC$ intersect at a point $L$ , $D$ lies between $A$ and $F$ , and the area of $\triangle AEF$ is 36. Clio constructs triangle $PQR$ with $PQ=BL$ , $QR=CL$ and $RP=DF$ , and notices that the area of $\triangle PQR$ is $\sqrt{6}$ . If the sum of all possible values of $DF$ is $\sqrt{m} + \sqrt{n}$ for positive integers $m \ge n$ , compute $100m+n$ .

*Based on a proposal by Calvin Lee*
