---
tag: EK68RNN7QP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h3385275
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44469
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
Suppose that $T\in \mathbb N$ is given. Find all functions $f:\mathbb Z \to \mathbb C$ such that, for all $m\in \mathbb Z$ we have $f(m+T)=f(m)$ and: $$ \forall a,b,c \in \mathbb Z: f(a)\overline{f(a+b)f(a+c)}f(a+b+c)=1. $$ Where $\overline{a}$ is the complex conjugate of $a$ .
