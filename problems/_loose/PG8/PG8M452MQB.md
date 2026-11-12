---
tag: PG8M452MQB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h3389502
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44484
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2024
    source: hf-ai-mo-aops
    label: 2024 Iran MO (3rd Round)
---
An integer number $n\geq 2$ and real numbers $x_1<x_2<\cdots < x_n$ are given. $f: \mathbb R \to \mathbb R$ is a function defined as $$ f(x) = \left |
\dfrac{(x-x_2)(x-x_3)\cdots (x-x_n)}{(x_1-x_2)(x_1-x_3)\cdots (x_1-x_n)}
\right | + \cdots +
\left |
\dfrac{(x-x_1)(x-x_2)\cdots (x-x_{n-1})}{(x_n-x_1)(x_n-x_2)\cdots (x_n-x_{n-1})}
\right |. $$ Prove that there exists $i\in \{1,2,\cdots,n-1\}$ such that for all $x\in (x_i,x_{i+1})$ one has $f(x)< \sqrt n$ .

Proposed by *Navid Safaei*
