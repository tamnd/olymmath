---
tag: 3W0YBAPQNH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1992 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h3336337
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28215
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 1992 Tournament Of Towns
---
We are given a finite number of functions of the form $y = c2^{-|x-d|}$ . In each case $c$ and $d$ are parameters with $c > 0$ . The function $f(x)$ is defined on the interval $[a, b]$ as follows: For each $x$ in $[a, b]$ , $f(x)$ is the maximum value taken by any of the given functions $y$ (defined above) at that point $x$ . It is known that $f(a) = f(b)$ . Prove that the total length of the intervals in which the function $f$ is increasing is equal to the total length of the intervals in which it is decreasing (that is, both are equal to $(b- a)/2$ ).

(NB Vasiliev)
