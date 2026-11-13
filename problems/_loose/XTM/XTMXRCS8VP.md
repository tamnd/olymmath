---
tag: XTMXRCS8VP
kind: problem
type: answer
answer: "10000"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85817
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On a $2019 \times 2019$ chessboard, a contagious disease is spreading. Each day, some of the squares on the chessboard are sick, and the rest are healthy. A healthy square that borders (along a side) a sick square becomes sick the next day. A sick square is always healthy again the next day. A healthy square that has been sick before can become sick again (if it is infected by an adjacent sick square). On day 1, only the middle square is sick. How many squares are sick on day 100?
A) 200
B) 298
C) 396
D) 9999
E) 10000
