---
tag: DSSG0AZ95E
kind: problem
type: answer
answer: All odd natural numbers n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Iran/train/0000.parquet#row=107
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo
    source: hf-mathnet
    label: Iran Iranian Mathematical Olympiad
---
A special computer can store algebraic expressions in its memory, which is unlimited and initially only expression $x$ is stored in it. This computer can perform the following operations:
* If algebraic expression $f$ is stored in the computer's memory, $\frac{1}{f}$ can be stored in it too (assuming that $f$ is not equivalent to zero).
* If algebraic expressions $f$ and $g$ are stored in the computer's memory, $f+g$ and $f-g$ can be stored in it too ($f$ and $g$ can be equal).
For example, the following expressions can be stored in the computer's memory: $\frac{1}{x}$, $x - \frac{1}{x}$, $\frac{1}{x-\frac{1}{x}}$, $\frac{1}{x-1}$ and ...
Find all natural numbers $n$ for which $x^n$ or an expression equivalent to it can be stored in the computer's memory (two algebraic expressions on variable $x$ are called equivalent if for each value of $x$ belonging to the domain of both expressions, they are equal).
