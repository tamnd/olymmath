---
tag: HPXC9ZQ18F
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h612407
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10463
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
Find the minimum of $f(x,y,z)=x^3+12\frac{yz}{x}+16(\frac{1}{yz})^{\frac{3}{2}}$ where $x,y$ , and $z$ are all positive.
Note: The problem as given in the tiebreaker did not specify that each of $x,y$ , and $z$ had to be positive. Without this constraint, the answer is $-\infty$ , as $x^3$ can be an arbitrarily large negative value and dominate the expression.
