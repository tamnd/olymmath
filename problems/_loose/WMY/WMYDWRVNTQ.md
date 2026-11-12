---
tag: WMYDWRVNTQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 China  Second Round Olympiad
    url: https://artofproblemsolving.com/community/c6h1596439
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35320
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-league/2017
    source: hf-ai-mo-aops
    label: 2017 China  Second Round Olympiad
---
Given a sequence $\{a_n\}$ : $a_1=1, a_{n+1}=\left\{
\begin{array}{lcr}
a_n+n, a_n\le n,
a_n-n, a_n>n,
\end{array}
\right.
n=1,2,\cdots.$
Find the number of positive integers $r$ satisfying $a_r<r\le 3^{2017}$ .
