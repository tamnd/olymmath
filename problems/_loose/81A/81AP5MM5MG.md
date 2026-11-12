---
tag: 81AP5MM5MG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Olympic Revenge
    url: https://artofproblemsolving.com/community/c6h1352264
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=32893
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: olympic-revenge/2016
    source: hf-ai-mo-aops
    label: 2016 Olympic Revenge
---
Let $T$ the set of the infinite sequences of integers. For two given elements in $T$ : $(a_{1},a_{2},a_{3},...)$ and $(b_{1},b_{2},b_{3},...)$ , define the sum $(a_{1},a_{2},a_{3},...)+(b_{1},b_{2},b_{3},...)=(a_{1}+b_{1},a_{2}+b_{2},a_{3}+b_{3},...)$ .
Let $f: T\rightarrow$ $\mathbb{Z}$ a function such that:
i) If $x\in T$ has exactly one of your terms equal $1$ and all the others equal $0$ , then $f(x)=0$ .
ii) $f(x+y)=f(x)+f(y)$ , for all $x,y\in T$ .
Prove that $f(x)=0$ for all $x\in T$
