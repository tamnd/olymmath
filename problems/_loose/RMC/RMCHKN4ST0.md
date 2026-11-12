---
tag: RMCHKN4ST0
kind: problem
type: answer
answer: "7"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=19036
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a 129-gon. Petya and Vasya are playing a game. They take turns marking the vertices of this polygon, with Petya making the first move. Petya can mark any unmarked vertex on each of his turns. Vasya can mark any unmarked vertex that is two positions away from the vertex Petya marked on his last turn. The game ends when Vasya cannot make his move. What is the maximum number of moves Vasya can make regardless of Petya's play?
