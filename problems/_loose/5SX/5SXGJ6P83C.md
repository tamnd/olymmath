---
tag: 5SXGJ6P83C
kind: problem
type: answer
answer: "4064257"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Croatia/train/0001.parquet#row=158
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hr-mo
    source: hf-mathnet
    label: Croatia Mathematical competitions in Croatia
---
On a $2017 \times 2017$ board, some of the squares are occupied by a single ladybird; the rest of the squares are empty. The ladybirds move, never leaving the board, according to the following principles. Every second, each ladybird moves to a neighbouring square. The moves are horizontal (to the square immediately to the right or to the left of the current square), or vertical (to the square above or below the one currently occupied). A ladybird which makes a horizontal move must move vertically in its next move. Similarly, a ladybird which makes a vertical move must move horizontally in its next move.

Determine the smallest number of ladybirds such that, regardless of their initial positions and their chosen paths, we may be sure that two of them will eventually find themselves in the same square, at the same moment.

(P. Soberón, *Problem-Solving Methods in Combinatorics*)
