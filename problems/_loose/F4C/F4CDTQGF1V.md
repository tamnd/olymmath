---
tag: F4CDTQGF1V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 India IMO Training Camp
    url: https://artofproblemsolving.com/community/c6h1557174
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=42251
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2017
    source: hf-ai-mo-aops
    label: 2017 India IMO Training Camp
---
There are $n$ lamps $L_1, L_2, \dots, L_n$ arranged in a circle in that order. At any given time, each lamp is either *on* or *off*. Every second, each lamp undergoes a change according to the following rule:

(a) For each lamp $L_i$ , if $L_{i-1}, L_i, L_{i+1}$ have the same state in the previous second, then $L_i$ is *off* right now. (Indices taken mod $n$ .)

(b) Otherwise, $L_i$ is *on* right now.

Initially, all the lamps are *off*, except for $L_1$ which is *on*. Prove that for infinitely many integers $n$ all the lamps will be *off* eventually, after a finite amount of time.
