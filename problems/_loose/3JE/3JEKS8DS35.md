---
tag: 3JEKS8DS35
kind: problem
type: answer
answer: a) impossible; b) possible
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ukraine/train/0001.parquet#row=42
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo
    source: hf-mathnet
    label: Ukraine UkraineMO
---
A square $n \times n$ is divided into $n^2$ cells. In total $n^2$ tokens are placed at some cell. During every round, a player can move one token from cell $A$ to cell $B$, and one token from cell $A$ to cell $C$, provided that cell $A$ contained at least two tokens, $B$ and $C$ are symmetric with respect to $A$, and finally $B$ and $C$ are adjacent to $A$. Is it possible that after a few such rounds every cell on the board contains exactly one token, in case:
a) $n = 2016$;
b) $n = 2017$?
