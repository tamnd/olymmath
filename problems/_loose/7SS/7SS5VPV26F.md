---
tag: 7SS5VPV26F
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1814849
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=18127
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2019
    source: hf-ai-mo-aops
    label: 2019 Online Math Open Problems
---
Consider the set $S$ of lattice points $(x,y)$ with $0\le x,y\le 8$ . Call a function $f:S\to \{1,2,\dots, 9\}$ a *Sudoku function* if:

- $\{ f(x,0), f(x,1), \dots, f(x,8)\} = \{1,2,\dots, 9\}$ for each $0\le x\le 8$ and $\{ f(0,y), f(1,y), \dots, f(8,y) \} = \{1,2,\dots, 9\}$ for each $0\le y\le 8$ .
- For any integers $0\le m,n\le 2$ and any $0\le i_1,j_1,i_2,j_2\le 2$ , $f(3m+i_1, 3n+j_1)\neq f(3m+i_2, 3n+j_2)$ unless $i_1=i_2$ and $j_1=j_2$ .

Over all Sudoku functions $f$ , compute the maximum possible value of $\sum_{0\le i\le 8} f(i,i) + \sum_{0\le i\le 7} f(i, i+1)$ .

*Proposed by Brandon Wang*
