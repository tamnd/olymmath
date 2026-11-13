---
tag: PCKXFPR76B
kind: problem
type: answer
answer: 'a: no; b: 64'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0001.parquet#row=258
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
In each cell of a $3 \times 3$ board, there is a lamp and a button. Pressing the button in a cell changes the state of the lamps in its neighboring cells (those that are on turn off and vice versa). The lamp in the same cell as the button does not change its state. Initially, all lamps are *off*.

a. Is it possible, after pressing some buttons, to ensure that all lamps are turned on?

b. How many different board states can be achieved?

*Remark:* Two cells are considered neighbors if they share a common side. Two board states are different if there is at least one lamp that is *on* in one state and *off* in the other.
