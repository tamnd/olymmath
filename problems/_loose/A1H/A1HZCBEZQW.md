---
tag: A1HZCBEZQW
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
    capture: hf-mathnet/Baltic_Way/train/0001.parquet#row=70
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: baltic-way/2013
    source: hf-mathnet
    label: Baltic Way Baltic Way 2013
---
There are some lamps in a row. Initially, some of the lamps are on, and the rest are off. We may change the states of the lamps by the following operations:
(1) Change the state of the rightmost lamp;
(2) Change the states of two consecutive lamps that are either both on or both off.
Is it necessarily possible to use the operations (1) and (2) so that all the lights become off?
