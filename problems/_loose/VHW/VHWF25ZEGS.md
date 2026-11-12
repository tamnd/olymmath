---
tag: VHWF25ZEGS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1997 Romania National Olympiad
    url: https://artofproblemsolving.com/community/c6h3542906
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=53925
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo/1997
    source: hf-ai-mo-aops
    label: 1997 Romania National Olympiad
---
Let $m \ge 2$ and $n \ge 1$ be integers and $A=(a_{ij})$ a square matrix of order $n$ with integer entries. Prove that for any permutation $\sigma \in S_n$ there is a function $\varepsilon : \{1,2,\ldots,n\} \to \{0,1\}$ such that replacing the entries $a_{\sigma(1)1},$ $a_{\sigma(2)2}, $ $\ldots,$ $a_{\sigma(n)n}$ of $A$ respectively by $$ a_{\sigma(1)1}+\varepsilon(1), ~a_{\sigma(2)2}+\varepsilon(2), ~\ldots, ~a_{\sigma(n)n}+\varepsilon(n), $$ the determinant of the matrix $A_{\varepsilon}$ thus obtained is not divisible by $m.$
