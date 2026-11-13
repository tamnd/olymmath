---
tag: EGJ9DC4Y6E
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Turkey/train/0000.parquet#row=141
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $n$ chests placed on the vertices of a regular $n$-gon and a bead. Alice and Bob play a game. At the beginning Alice hides the bead in one of the chests. Each move consists of three stages:
* Alice, if she wishes, can secretly move the bead from the located chest to any of two neighboring chests if the neighboring chest is not chosen by Bob at the previous move
* Bob chooses one of the chests
* Alice tells the distance from the chosen chest to the chest where the bead is located
If Bob can determine the chest containing the bead at the end of some move he wins. For all values of $n \ge 3$ determine the minimal number of moves necessary for Bob to guarantee winning.
