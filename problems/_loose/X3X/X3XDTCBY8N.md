---
tag: X3XDTCBY8N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=25401
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On an $8 \times 8$ chessboard, two players are playing a game of "cat and mouse." The first player has one token - the mouse, and the second player has several tokens - the cats. All tokens move the same way: one cell to the right, left, up, or down. If the mouse reaches the edge of the board, it can jump off the board on its next move. If a cat and the mouse land on the same cell, the cat eats the mouse.

The players take turns, and the second player moves all of their cats in one turn (different cats can move in different directions). The mouse starts. It tries to jump off the board, while the cats try to eat it before it does.

a) Suppose there are only two cats. The mouse is already placed on some cell not on the edge. Can the cats be placed on the edge of the board in such a way that they can catch the mouse?

b) Suppose there are three cats, but the mouse gets an extra move: it makes two moves in a row on its first turn. Prove that the mouse can escape from the cats, regardless of the initial positions of the tokens.
