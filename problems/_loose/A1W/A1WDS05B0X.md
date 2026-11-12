---
tag: A1WDS05B0X
kind: problem
type: answer
answer: "120"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=13073
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a chess tournament, a team of schoolchildren and a team of students, each consisting of 15 people, are competing against each other. During the tournament, each schoolchild must play against each student exactly once, and each person must play no more than one game per day. The number of games played on different days may vary.

At some point in the tournament, the organizer noticed that the schedule for the next day can be arranged in exactly 1 way with 15 games, and in $N$ ways with 1 game (the order of the games in the schedule does not matter, only who plays against whom). Find the maximum possible value of $N$.
