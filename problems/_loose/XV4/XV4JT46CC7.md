---
tag: XV4JT46CC7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h500638
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8478
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2012
    source: hf-ai-mo-aops
    label: 2012 Online Math Open Problems
---
For reals $x\ge3$ , let $f(x)$ denote the function
$$f(x) = \frac {-x + x\sqrt{4x-3} } { 2} .$$Let $a_1, a_2, \ldots$ , be the sequence satisfying $a_1 > 3$ , $a_{2013} = 2013$ , and for $n=1,2,\ldots,2012$ , $a_{n+1} = f(a_n)$ . Determine the value of
$$a_1 + \sum_{i=1}^{2012} \frac{a_{i+1}^3} {a_i^2 + a_ia_{i+1} + a_{i+1}^2} .$$

*Ray Li.*
