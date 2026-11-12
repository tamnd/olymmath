---
tag: F440P6XYVK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=15336
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The game board consists of a left and a right part. Each part has several fields; between them, several segments are drawn, each connecting two fields from different parts. From any field, it is possible to reach any other field via the segments. Initially, a lilac chip is placed on one field of the left part, and a purple chip is placed on one field of the right part. Lёsha and Pasha take turns; Pasha starts. On a turn, a player moves their chip (Lёsha moves the lilac chip, and Pasha moves the purple chip) along a segment to a field that does not contain the other chip. It is forbidden to create a position that has already occurred in the game (positions are considered the same if the lilac chip is on the same field and the purple chip is also on the same field). The player who cannot make a move loses. Do there exist a board and an initial placement of chips such that Pasha has a winning strategy?

(I. Bogdanov, M. Didin)
