---
tag: 36VZN3XFJ1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: Russian TST 2022
    url: https://artofproblemsolving.com/community/c6h3036582
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=57246
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-tst/2022
    source: hf-ai-mo-aops
    label: Russian TST 2022
---
The set $A{}$ of positive integers satisfies the following conditions:

- If a positive integer $n{}$ belongs to $A{}$ , then $2n$ also belongs to $A{}$ ;

- For any positive integer $n{}$ there exists an element of $A{}$ divisible by $n{}$ ;

- There exist finite subsets of $A{}$ with arbitrarily large sums of reciprocals of elements.

Prove that for any positive rational number $r{}$ there exists a finite subset $B\subset A$ such that $$\sum_{x\in B}\frac{1}{x}=r.$$
