---
tag: DESFH4NS43
kind: problem
type: answer
answer: 2^{4041} + 2^{8081}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=232703
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The set of quadruples $(a,b,c,d)$ where each of $a,b,c,d$ is either $0$ or $1$ is *called vertices of the four dimensional unit cube* or *4-cube* for short. Two vertices are called *adjacent*, if their respective quadruples differ by one variable only. Each two adjacent vertices are connected by an edge. A robot is moving through the edges of the 4-cube starting from $(0,0,0,0)$ and each turn consists of passing an edge and moving to adjacent vertex. In how many ways can the robot go back to $(0,0,0,0)$ after $4042$ turns? Note that it is NOT forbidden for the robot to pass through $(0,0,0,0)$ before the $4042$-nd turn.
