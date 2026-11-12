---
tag: K0NWMTEV5E
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 International Zhautykov Olympiad
    url: https://artofproblemsolving.com/community/c6h386944
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=6602
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: zhautykov/2011
    source: hf-ai-mo-aops
    label: 2011 International Zhautykov Olympiad
---
Let $n$ be integer, $n>1.$ An element of the set $M=\{ 1,2,3,\ldots,n^2-1\}$ is called *good* if there exists some element $b$ of $M$ such that $ab-b$ is divisible by $n^2.$ Furthermore, an element $a$ is called *very good* if $a^2-a$ is divisible by $n^2.$ Let $g$ denote the number of *good* elements in $M$ and $v$ denote the number of *very good* elements in $M.$ Prove that
$$v^2+v \leq g \leq n^2-n.$$
