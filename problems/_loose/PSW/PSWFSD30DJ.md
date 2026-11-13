---
tag: PSWFSD30DJ
kind: problem
type: answer
answer: "4800"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=160944
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given an equilateral triangle of side 10 , divide each side into three equal parts, construct an equilateral triangle on the middle part, and then delete the middle part. Repeat this step for each side of the resulting polygon. Find $S^{2}$, where $S$ is the area of region obtained by repeating this procedure infinitely many times.
