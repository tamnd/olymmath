---
tag: 2AFRKKYV6Y
kind: problem
type: answer
answer: "Yes"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Russia/train/0000.parquet#row=284
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian
    source: hf-mathnet
    label: Russia XLIII Russian mathematical olympiad
---
Pasha chose 2017 (not necessarily distinct) positive integers $a_1, a_2, \dots, a_{2017}$, and then he plays a solitaire game. Initially, he has 2017 empty large boxes and an unbounded supply of small stones. By a move, Pasha adds $a_1$ stones into some box by his choice, $a_2$ stones into any other box by his choice, ..., $a_{2017}$ stones into the remaining box. His aim is to equalize the numbers of stones in all boxes. Can he choose the initial numbers so that the aim is reachable in 43 moves, but unreachable in any smaller (nonzero) number of moves?
