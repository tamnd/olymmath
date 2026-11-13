---
tag: 361YVSCXZG
kind: problem
type: answer
answer: "1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0001.parquet#row=245
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ee-mo
    source: hf-mathnet
    label: Estonia Estonian Mathematical Olympiad
---
Let $n \ge 3$ be an integer. In an $n \times n$ grid there are three invisible monsters: one in the upper right corner square and one in each of its neighboring squares. In a $2 \times 2$ area in the opposite corner of the grid some frogs are placed. A square may contain more than one frog.

The frogs and the monsters take turns making the following moves. On the frogs' turn, each frog makes a knight move, jumping either two squares up and one to the right or one square up and two to the right. On the monsters' turn, they may make up to a total of 3 knight moves, jumping either two squares down and one to the left or one square down and two to the left. The frogs start. If a frog and a monster ever land on the same square, the monster will eat the frog.

Find the least number of frogs needed to ensure that at least one frog could make it to a spot where both possible jumps would take it off the grid.
