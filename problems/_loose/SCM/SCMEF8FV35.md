---
tag: SCMEF8FV35
kind: problem
type: answer
answer: floor(log_2(n+1))
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Baltic_Way/train/0001.parquet#row=80
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
Livia has a deck of $n$ cards. She proceeds to discard the cards of the deck according to the following pattern: In each consecutive round, she will remove the cards numbered $1$, $2$, $4$, $6$, $8$, \ldots\ (i.e., the card numbered $1$ and all the cards with an even number), to produce a thinner deck. This procedure is then repeated ad infinitum. How many such rounds are required to reduce the deck to nil?
