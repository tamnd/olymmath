---
tag: NGC5NQDAMS
kind: problem
type: answer
answer: a) Player B wins; b) Player A wins.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0001.parquet#row=105
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ar-oma/2015
    source: hf-mathnet
    label: Argentina Argentine National Olympiad 2015
---
Given two positive integers $a$ and $b$, a legal move is to choose a proper divisor of one of them and add it to either $a$ or $b$. Players $A$ and $B$ make legal moves in turns; $A$ plays first. The one who obtains a number $\ge 2015$ wins. Determine who wins if the game starts with:
$$
a) a=3, b=5; b) a=6, b=7.
$$

(Here a proper divisor of $k \in \mathbb{N}$ means a $d \in \mathbb{N}$ such that $d$ divides $k$ and $d \neq k$.)
