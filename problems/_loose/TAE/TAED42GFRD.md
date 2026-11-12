---
tag: TAED42GFRD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Romania EGMO TST
    url: https://artofproblemsolving.com/community/c6h3553005
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=53845
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-egmo-tst/2017
    source: hf-ai-mo-aops
    label: 2017 Romania EGMO TST
---
In $p{}$ of the vertices of the regular polygon $A_0A_1\ldots A_{2016}$ we write the number $1{}$ and in the remaining ones we write the number $-1.{}$ Let $x_i{}$ be the number written on the vertex $A_i{}.$ A vertex is *good* if $$x_i+x_{i+1}+\cdots+x_j>0 \text{and} x_i+x_{i-1}+\cdots+x_k>0,$$for any integers $j{}$ and $k{}$ such that $k\leqslant i\leqslant j.$ Note that the indices are taken modulo $2017.$ Determine the greatest possible value of $p{}$ such that, regardless of numbering, there always exists a good vertex.
