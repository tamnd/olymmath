---
tag: YDN2YCYDXV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=189626
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a tetrahedron $P A B C$ and a point $Q$ inside it. Prove that

$$
\measuredangle B Q C + \measuredangle C Q A + \measuredangle A Q B > \measuredangle B P C + \measuredangle C P A + \measuredangle A P B
$$
