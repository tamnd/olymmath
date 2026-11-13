---
tag: 4JDW9MJRK6
kind: problem
type: answer
answer: 121 \times 212
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237631
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Albrecht writes numbers on the points of the first quadrant with integer coordinates in the following way: If at least one of the coordinates of a point is 0, he writes 0; in all other cases the number written on point $(a, b)$ is one greater than the average of the numbers written on points $ (a+1 , b-1) $ and $ (a-1,b+1)$ . Which numbers could he write on point $(121, 212)$?
Note: The elements of the first quadrant are points where both of the coordinates are non- negative.
