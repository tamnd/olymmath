---
tag: KZ88Q9RYX0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 BMT
    url: https://artofproblemsolving.com/community/c6h3282160
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70544
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bmt/2023
    source: hf-ai-mo-aops
    label: 2023 BMT
---
A robot initially at position $0$ along a number line has a *movement function* $f(u, v)$ . It rolls a fair $26$ -sided die repeatedly, with the $k$ -th roll having value $r_k$ . For $k \ge 2$ , if $r_k > r_{k-1}$ , it moves $f(r_k, r_{k-1})$ units in the positive direction. If $r_k < r_{k-1}$ , it moves $f(r_k, r_{k-1})$ units in the negative direction. If $r_k = r_{k-1}$ , all movement and die-rolling stops and the robot remains at its final position $x$ . If $f(u, v) = (u^2 - v^2)^2 + (u - 1)(v + 1)$ , compute the expected value of $x$ .
