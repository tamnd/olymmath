---
tag: DMN40JQHEN
kind: problem
type: answer
answer: P_{4}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154858
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A game of Jai Alai has eight players and starts with players $P_{1}$ and $P_{2}$ on court and the other players $P_{3}, P_{4}, P_{5}, P_{6}, P_{7}, P_{8}$ waiting in a queue. After each point is played, the loser goes to the end of the queue; the winner adds 1 point to his score and stays on the court; and the player at the head of the queue comes on to contest the next point. Play continues until someone has scored 7 points. At that moment, we observe that a total of 37 points have been scored by all eight players. Determine who has won and justify your answer.
