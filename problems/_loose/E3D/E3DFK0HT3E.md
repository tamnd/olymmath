---
tag: E3DFK0HT3E
kind: problem
type: answer
answer: 'Part (a): Yes. Part (b): Yes.'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0001.parquet#row=253
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: rioplatense
    source: hf-mathnet
    label: Argentina Rioplatense Mathematical Olympiad
---
Mati is playing with some magic boxes and a machine. Each box has a value inside. When opening a box Mati sees its value, adds the value of the box to his score and it is destroyed (if the box's value is negative, Mati loses points). By placing a magic box with value $X$ in the machine, this box is destroyed and we obtain two magic boxes with values $X + 1$ and $X - 1$ (it is not known which is which, but the new boxes can be distinguished from the others). At the beginning of the game, Mati has 0 points and one magic box whose value he knows to be 0.

a. Show that Mati can ensure reaching 1000 points or more.

b. Can Mati ensure reaching 1000000 points or more, without having less than -42 points at any time?
