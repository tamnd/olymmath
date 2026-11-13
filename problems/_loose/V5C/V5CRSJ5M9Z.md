---
tag: V5CRSJ5M9Z
kind: problem
type: answer
answer: "19"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=114383
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Magnus and Viswanathan play a game against each other three times:
- In each game, each player's score is a positive integer. The players' scores at the end of the three games are six different integers.
- In each game, the winner's score is at least 25 points. If the winner's score is 25 , their opponent's score must be at most 23 . If the winner's score is greater than 25 , their opponent's score must be exactly 2 less than the winner's score.
- Viswanathan wins either the first game or the second game, but not both.
- Viswanathan wins the third game with a score of 25 .
- Each player's score in the second game is the average of their scores in the first and third games.
What was Magnus's score in the third game?
