---
tag: M787E8WHYE
kind: problem
type: answer
answer: "9"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=102579
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Write the number $1234567891011 \cdots \cdots 19941995$ on the blackboard, forming the integer $N_{1}$, erase the digits in the even positions of $N_{1}$, the remaining digits form the integer $N_{2}$, erase the digits in the odd positions of $N_{2}$, the remaining digits form the integer $N_{3}$, erase the digits in the even positions of $N_{3}$, the remaining digits form the integer $N_{4}$. This process continues until only one digit remains on the blackboard. Determine this digit (Note: Count the positions from left to right, for example, in 12345, 1 is in the 1st position, 2 is in the 2nd position, and so on).
