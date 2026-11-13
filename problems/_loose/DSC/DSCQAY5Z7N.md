---
tag: DSCQAY5Z7N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=203987
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For integers $a,b,c,d$ satisfy $0<a<b<103$ and $0<c<d<103$. Two men A and B play a game. Place $103$ positions on the circle. One of them are named $S$, and the next one in the anticlockwise direction of $S$ is named $G$. At the first, a stone is placed at $S$. Then two players take turns to perform the following operations:

$\bullet$ Operation of A: Move the stone $a$ steps or $b$ steps clockwisely.
$\bullet$ Operation of B: Move the stone $c$ steps or $d$ steps clockwisely.

A performs first. The goal of B is to put the stone at $G$. If B has a strategy to achieve his goal no matter how A does, then we call $(a,b,c,d)$ a \textit{good} array. How many good arrays are there in total?
