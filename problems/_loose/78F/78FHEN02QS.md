---
tag: 78FHEN02QS
kind: problem
type: answer
answer: Andriyko
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ukraine/train/0000.parquet#row=35
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo
    source: hf-mathnet
    label: Ukraine Ukrainian Mathematical Olympiad
---
Mykolka and Andriyko are playing the following game. They write positive integers turn by turn thus forming a sequence $a_1, a_2, ..., a_{2006}$ obeying the following restrictions: $a_1 = 1$ (this first turn is fixed, and it is made by Mykolka), and $a_n \le a_{n+1} \le 3a_n$ for $1 \le n \le 2005$. If, after the last turn was made, the sums $a_1 + a_2 + ... + a_{2004} + a_{2005}$ and $a_1 + a_2 + ... + a_{2005} + a_{2006}$ appear to be mutually prime numbers, then the winner is Andriyko, otherwise it is Mykolka. Who of the players can secure his victory whatever way the other one plays?
