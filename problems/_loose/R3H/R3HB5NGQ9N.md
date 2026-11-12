---
tag: R3HB5NGQ9N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h2378378
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=19311
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2020
    source: hf-ai-mo-aops
    label: 2020 Online Math Open Problems
---
Suppose that $F$ is a field with exactly $5^{14}$ elements. We say that a function $f:F \rightarrow F$ is *happy*, if, for all $x,y \in F$ , $$ \left(f(x+y)+f(x)\right)\left(f(x-y)+f(x)\right)=f(y^2)-f(x^2). $$ Compute the number of elements $z$ of $F$ such that there exist distinct happy functions $h_1$ and $h_2$ such that $h_1(z)=h_2(z).$ *Proposed by Luke Robitaille*
