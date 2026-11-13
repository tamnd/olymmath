---
tag: ZB5H4RRHR8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=245223
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Viktor and Natalia play a colouring game with a 3-dimensional cube taking turns alternatingly. Viktor goes first, and on each of his turns, he selects an unpainted edge, and paints it violet. On each of Natalia's turns, she selects an unpainted edge, or at most once during the game a face diagonal, and paints it neon green. If the player on turn cannot make a legal move, then the turn switches to the other player. The game ends when nobody can make any more legal moves.

Natalia wins if at the end of the game every vertex of the cube can be reached from every other vertex by traveling only along neon green segments (edges or diagonal), otherwise Viktor wins.

Who has a winning strategy? (Prove your answer.)

*Proposed by Viktor Simjanoski*
