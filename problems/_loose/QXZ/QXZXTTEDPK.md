---
tag: QXZXTTEDPK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h589756
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=11596
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2014
    source: hf-ai-mo-aops
    label: 2014 NIMO Problems
---
Ana and Banana play a game. First, Ana picks a real number $p$ with $0 \le p \le 1$ . Then, Banana picks an integer $h$ greater than $1$ and creates a spaceship with $h$ hit points. Now every minute, Ana decreases the spaceship's hit points by $2$ with probability $1-p$ , and by $3$ with probability $p$ . Ana wins if and only if the number of hit points is reduced to exactly $0$ at some point (in particular, if the spaceship has a negative number of hit points at any time then Ana loses). Given that Ana and Banana select $p$ and $h$ optimally, compute the integer closest to $1000p$ .

*Proposed by Lewis Chen*
