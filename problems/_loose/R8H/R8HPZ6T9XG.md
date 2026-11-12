---
tag: R8HPZ6T9XG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 CMIMC
    url: https://artofproblemsolving.com/community/c6h1221826
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=13784
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2016
    source: hf-ai-mo-aops
    label: 2016 CMIMC
---
Aaron is trying to write a program to compute the terms of the sequence defined recursively by $a_0=0$ , $a_1=1$ , and $$a_n=\begin{cases}a_{n-1}-a_{n-2}&n\equiv0\pmod22a_{n-1}-a_{n-2}&\text{else}\end{cases}$$ However, Aaron makes a typo, accidentally computing the recurrence by $$a_n=\begin{cases}a_{n-1}-a_{n-2}&n\equiv0\pmod32a_{n-1}-a_{n-2}&\text{else}\end{cases}$$ For how many $0\le k\le2016$ did Aaron coincidentally compute the correct value of $a_k$ ?
