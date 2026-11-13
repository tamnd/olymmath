---
tag: CDYX8T9SZD
kind: problem
type: answer
answer: "26"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=132475
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are 1600 points on a circle, numbered $1, 2, \cdots, 1600$ in a counterclockwise direction. They divide the circumference into 1600 gaps. Now, choose one point and color it red, then proceed to color other points red according to the following rule: if the $k$-th point is colored red, then move counterclockwise over $k$ gaps and color the endpoint reached red. Continue this process. How many red points can be obtained on the circumference at most? Prove your conclusion.
