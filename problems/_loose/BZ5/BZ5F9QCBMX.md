---
tag: BZ5F9QCBMX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 Azerbaijan Senior NMO
    url: https://artofproblemsolving.com/community/c6h3564565
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2412
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: az-mo/2025
    source: hf-ai-mo-aops
    label: 2025 Azerbaijan Senior NMO
---
You are given a positive integer $n$ . $n^2$ amount of people stand on coordinates $(x;y)$ where $x,y\in\{0;1;2;...;n-1\}$ . Every person got a water cup and two people are considered to be neighbour if the distance between them is $1$ . At the first minute, the person standing on coordinates $(0;0)$ got $1$ litres of water, and the other $n^2-1$ people's water cup is empty. Every minute, two neighbouring people are chosen that does not have the same amount of water in their water cups, and they equalize the amount of water in their water cups.

Prove that, no matter what, the person standing on the coordinates $(x;y)$ will not have more than $\frac1{x+y+1}$ litres of water.
