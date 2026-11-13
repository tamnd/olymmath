---
tag: YH3WK0F8QM
kind: problem
type: answer
answer: N \geq 220
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268766
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the game of "Fingers", $N$ players stand in a circle and simultaneously thrust out their right hands, each with a certain number of fingers showing. The total number of fingers shown is counted out round the circle from the leader, and the player on whom the count stops is the winner. How large must $N$ be for a suitably chosen group of $N/10$ players to contain a winner with probability at least $0.9$? How does the probability that the leader wins behave as $N\to\infty$?
