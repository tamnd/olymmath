---
tag: HENKTC38HZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1734485
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=16845
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2018
    source: hf-ai-mo-aops
    label: 2018 Online Math Open Problems
---
Iris does not know what to do with her 1-kilogram pie, so she decides to share it with her friend Rosabel. Starting with Iris, they take turns to give exactly half of total amount of pie (by mass) they possess to the other person. Since both of them prefer to have as few number of pieces of pie as possible, they use the following strategy: During each person's turn, she orders the pieces of pie that she has in a line from left to right in increasing order by mass, and starts giving the pieces of pie to the other person beginning from the left. If she encounters a piece that exceeds the remaining mass to give, she cuts it up into two pieces with her sword and gives the appropriately sized piece to the other person.

When the pie has been cut into a total of 2017 pieces, the largest piece that Iris has is $\frac{m}{n}$ kilograms, and the largest piece that Rosabel has is $\frac{p}{q}$ kilograms, where $m,n,p,q$ are positive integers satisfying $\gcd(m,n)=\gcd(p,q)=1$ . Compute the remainder when $m+n+p+q$ is divided by 2017.

*Proposed by Yannick Yao*
