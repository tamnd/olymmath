---
tag: RT6DEHDKE6
kind: problem
type: answer
answer: "152"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=17250
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
An empty $3 \times 51$ table is drawn on the board. Masha wants to fill its cells with numbers, following these rules:

- each of the numbers $1, 2, 3, \ldots, 153$ must be present in the table;
- the number 1 must be in the bottom-left cell of the table;
- for any natural number $a \leqslant 152$, the numbers $a$ and $a+1$ must be in adjacent cells.

(a) (1 point) What is the largest number that can be in the cell adjacent to the number 1?

(b) (3 points) We will call a cell of the table good if the number 153 can be in it. How many good cells are there?
