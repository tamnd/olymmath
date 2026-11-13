---
tag: TTW1H6FMNH
kind: problem
type: answer
answer: a) yes; b) no
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Baltic_Way/train/0001.parquet#row=147
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: baltic-way
    source: hf-mathnet
    label: Baltic Way Baltic Way
---
A sequence of positive integers $\{s_i\}$ is constructed in the following way: $s_1 = 2$, and for all $i > 1$ $s_i$ is the least number that is larger than $s_{i-1}$ and contains digit:
* "2" if $i = 1$ (mod 4)
* "0" if $i = 2$ (mod 4)
* "1" if $i = 3$ (mod 4)
* "4" if $i = 4$ (mod 4).
This sequence starts with $2$, $10$, $11$, $14$, $20$, $30$, $31$, $34$, $42$, $50$, ...
Does $\{s_i\}$ contain number

a) $2001$

b) $2004$?
