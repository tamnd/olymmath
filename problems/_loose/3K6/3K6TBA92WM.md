---
tag: 3K6TBA92WM
kind: problem
type: answer
answer: "8"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=18983
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Vasya placed numbers from 1 to $101^{2}$ once each in all the cells of a $101 \times 101$ board. Petya chooses a cell on the board, places a token on it, and wants to make as many moves as possible so that the number under the token keeps increasing. In one move, Petya can move the token to any cell within a $5 \times 5$ square centered on the cell where the token is currently located (the token must remain within the board). What is the maximum number of moves Petya can definitely make, regardless of how Vasya arranges the numbers?

(S. Berlov)
