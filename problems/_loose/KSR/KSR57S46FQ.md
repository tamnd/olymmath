---
tag: KSR57S46FQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1982 Czech and Slovak Olympiad III A
    url: https://artofproblemsolving.com/community/c6h3396800
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=37703
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cz-sk-mo/1982
    source: hf-ai-mo-aops
    label: 1982 Czech and Slovak Olympiad III A
---
Given is a sequence of real numbers $\{a_n\}^{\infty}_{n=1}$ such that $a_n \ne a_m$ for $n\ne m,$ given is a natural number $k$ . Construct an injective map $P:\{1,2,\ldots,20k\}\to\mathbb Z^+$ such that the following inequalities hold: $$ a_{p(1)}<a_{p(2)}<...<a_{p(10)} $$ $$ a_{p(10)}>a_{p(11)}>...>a_{p(20)} $$ $$ a_{p(20)}<a_{p(21)}<...<a_{p(30)} $$ $$ ... $$ $$ a_{p(20k-10)}>a_{p(20k-9)}>...>a_{p(20k)} $$ $$ a_{p(10)}>a_{p(30)}>...>a_{p((20k-10))} $$ $$ a_{p(1)}<a_{p(20)}<...<a_{p(20k)}, $$
