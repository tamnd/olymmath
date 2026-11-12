---
tag: DMJARG46GK
kind: problem
type: answer
answer: "13"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=17683
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Builders need to tile the floor in a small house with small square tiles. The client says that the variant with more red tiles is preferable. For variants with the same number of red tiles, the one with more orange tiles is preferable; and generally, the client's preferences for colors are: red, orange, yellow, green, blue, indigo. His wife, however, wants the opposite:

- the number of indigo tiles should be at least as many as the total number of red, orange, yellow, green, and blue tiles;
- the number of blue tiles should be at least as many as the total number of red, orange, yellow, and green tiles;
- the number of green tiles should be at least as many as the total number of red, orange, and yellow tiles;
- the number of yellow tiles should be at least as many as the total number of red and orange tiles;
- the number of orange tiles should be at least as many as the number of red tiles.

The floor requires 100 tiles.

How many green tiles will be needed if the most preferable variant for the client is chosen, which also meets the conditions set by his wife?
