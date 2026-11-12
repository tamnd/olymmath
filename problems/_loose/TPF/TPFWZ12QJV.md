---
tag: TPFWZ12QJV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 CMIMC
    url: https://artofproblemsolving.com/community/c6h2471720
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70594
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2021
    source: hf-ai-mo-aops
    label: 2021 CMIMC
---
Dilhan has objects of $3$ types, $A$ , $B$ , and $C$ , and $6$ functions $$ f_{A,B},f_{A,C},f_{B,A},f_{B,C},f_{C,A},f_{C,B} $$ where $f_{X,Y}$ takes in an object of type $X$ and outputs an object of type $Y$ . Dilhan wants to compose his $6$ functions, without repeats, such that the resulting expression is well-typed, meaning an object can be taken in by the first function, and the resulting output can then be taken in by the second function, and so on. In how many orders can he compose his $6$ functions, satisfying this constraint?

*Proposed by Adam Bertelli*
