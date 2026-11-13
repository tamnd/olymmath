---
tag: BECCPY50PP
kind: problem
type: answer
answer: "n"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Austria/train/0000.parquet#row=220
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: at-oemo
    source: hf-mathnet
    label: Austria Austrian Mathematical Olympiad
---
Let $n \ge 3$ be an integer. A *circle dance* is a dance that is performed according to the following rule: On the floor, $n$ points are marked at equal distances along a large circle. At each of these points is a sheet of paper with an arrow pointing either clockwise or counterclockwise. One of the points is labeled "Start". The dancer starts at this point. In each step, he first changes the direction of the arrow at his current position and then moves to the next point in the new direction of the arrow.

a) Show: Each circle dance visits each point infinitely often.

b) How many different circle dances are there? Two circle dances are considered to be the same if they differ only by a finite number of steps at the beginning and then always visit the same points in the same order. (The common sequence of steps may begin at different times in the two dances.)

(Birgit Vera Schmidt)
