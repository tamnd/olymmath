---
tag: KCH6T5NT13
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h366566
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=4766
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2010
    source: hf-ai-mo-aops
    label: 2010 China Team Selection Test
---
Given integer $n\geq 2$ and positive real number $a$ , find the smallest real number $M=M(n,a)$ , such that for any positive real numbers $x_1,x_2,\cdots,x_n$ with $x_1 x_2\cdots x_n=1$ , the following inequality holds:
$$\sum_{i=1}^n \frac {1}{a+S-x_i}\leq M$$
where $S=\sum_{i=1}^n x_i$ .
