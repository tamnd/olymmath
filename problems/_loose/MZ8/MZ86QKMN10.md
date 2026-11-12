---
tag: MZ86QKMN10
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Belarusian National Olympiad
    url: https://artofproblemsolving.com/community/c6h3319159
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=31329
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: by-mo/2021
    source: hf-ai-mo-aops
    label: 2021 Belarusian National Olympiad
---
An arbitrary positive number $a$ is given. A sequence ${a_n}$ is defined by equalities $a_1=\frac{a}{a+1}$ and $a_{n+1}=\frac{aa_n}{a^2+a_n-aa_n}$ for all $n \geq 1$ Find the minimal constant $C$ such that inequality $$ a_1+a_1a_2+\ldots+a_1\ldots a_m<C $$ holds for all positive integers $m$ regardless of $a$
