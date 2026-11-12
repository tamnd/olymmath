---
tag: ERG0RWSEJR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 Mongolian Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2537322
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=48605
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo/2000
    source: hf-ai-mo-aops
    label: 2000 Mongolian Mathematical Olympiad
---
Given a natural number $n$ , find the number of quadruples $(x,y,u,v)$ of integers with $1\le x,y,y,v\le n$ satisfy the following inequalities:
\begin{align*}
&1\le v+x-y\le n,
&1\le x+y-u\le n,
&1\le u+v-y\le n,
&1\le v+x-u\le n.
\end{align*}
