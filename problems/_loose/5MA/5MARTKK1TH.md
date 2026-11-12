---
tag: 5MARTKK1TH
kind: problem
type: answer
answer: "34190"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=13157
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
First, we will calculate the number of ways to choose three points out of the 60 available. The first point can be chosen in 60 ways, the second in 59 ways, and the third in 58 ways; as a result, we get $205320=60 \cdot 59 \cdot 58$ options. Since the selections of vertices ABC, ACB, CBA, CAB, BAC, and BCA all give the same triangle, the number of ways to choose three points without considering the order of selection is 205320:6=34220. We will not be satisfied with the sets of three points that lie on the same straight line. There are exactly 30 such sets. Therefore, there are $34220-30=34190$ ways to construct the given triangles.
