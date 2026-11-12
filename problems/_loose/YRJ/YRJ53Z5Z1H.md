---
tag: YRJ53Z5Z1H
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Taiwan TST Round 2
    url: https://artofproblemsolving.com/community/c6h1077657
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=13208
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2015
    source: hf-ai-mo-aops
    label: 2015 Taiwan TST Round 2
---
Let $f(x)=\sum_{i=0}^{n}a_ix^i$ and $g(x)=\sum_{i=0}^{n}b_ix^i$ , where $a_n$ , $b_n$ can be zero.
Called $f(x)\ge g(x)$ if exist $r$ such that $\forall i>r,a_i=b_i,a_r>b_r$ or $f(x)=g(x)$ .

Prove that: if the leading coefficients of $f$ and $g$ are positive, then $f(f(x))+g(g(x))\ge f(g(x))+g(f(x))$
