---
tag: X12WDSDT8D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: Russian TST 2021
    url: https://artofproblemsolving.com/community/c6h3036794
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=57244
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250063
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-tst/2021
    source: hf-ai-mo-aops
    label: Russian TST 2021
---
A point $P{}$ is considered on the incircle of the triangle $ABC$ . We draw the tangent segments from $P{}$ to the three excircles of $ABC$ . Prove that from the obtained three tangent segments it is possible to make a right triangle if and only if the point $P{}$ lies on one of the lines connecting two of the midpoints of the sides of $ABC$ .
