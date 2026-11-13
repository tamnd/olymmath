---
tag: TF5H5ZCGCR
kind: problem
type: answer
answer: \lfloor\frac{}{2}\rfloor\lceil\frac{}{2}\rceil+1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=113860
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive integer $m$. Several honest people and $m$ ordinary people are sitting around a round table. Honest people never lie, while ordinary people will answer randomly. Person A comes to the scene to find an honest person as a friend, and everyone simultaneously tells A whether the next person in the clockwise direction is an honest person or an ordinary person. Question: What is the maximum number of honest people such that A cannot guarantee finding a friend based solely on their responses?
