---
tag: 2XFG4YJ4SF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2005 Taiwan TST Round 2
    url: https://artofproblemsolving.com/community/c6h47941
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=61131
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2005
    source: hf-ai-mo-aops
    label: 2005 Taiwan TST Round 2
---
Find all positive integers $n \ge 3$ such that there exists a positive constant $M_n$ satisfying the following inequality for any $n$ positive reals $a_1, a_2,\dots\>,a_n$ : $$ \frac{a_1+a_2+\cdots\>+a_n}{\sqrt[n]{a_1a_2\cdots\>a_n}} \le M_n \biggl( \frac{a_2}{a_1} + \frac{a_3}{a_2} +\cdots\>+ \frac{a_n}{a_{n-1}} + \frac {a_1}{a_n} \biggr).$$ Moreover, find the minimum value of $M_n$ for such $n$ .

The difficulty is finding $M_n$ ...
