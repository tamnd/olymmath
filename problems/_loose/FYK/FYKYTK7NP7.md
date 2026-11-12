---
tag: FYKYTK7NP7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h519406
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10443
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: smt/2013
    source: hf-ai-mo-aops
    label: 2013 Stanford Mathematics Tournament
---
Charles is playing a variant of Sudoku. To each lattice point $(x, y)$ where $1\le x,y <100$ , he assigns an integer between $1$ and $100$ inclusive. These integers satisfy the property that in any row where $y=k$ , the $99$ values are distinct and never equal to $k$ ; similarly for any column where $x=k$ . Now, Charles randomly selects one of his lattice points with probability proportional to the integer value he assigned to it. Compute the expected value of $x+y$ for the chosen point $(x, y)$ .
