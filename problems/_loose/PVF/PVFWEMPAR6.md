---
tag: PVFWEMPAR6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h516591
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10024
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2013
    source: hf-ai-mo-aops
    label: 2013 Online Math Open Problems
---
Let $N$ denote the number of ordered 2011-tuples of positive integers $(a_1,a_2,\ldots,a_{2011})$ with $1\le a_1,a_2,\ldots,a_{2011} \le 2011^2$ such that there exists a polynomial $f$ of degree $4019$ satisfying the following three properties:

- $f(n)$ is an integer for every integer $n$ ;
- $2011^2 \mid f(i) - a_i$ for $i=1,2,\ldots,2011$ ;
- $2011^2 \mid f(n+2011) - f(n)$ for every integer $n$ .

Find the remainder when $N$ is divided by $1000$ .

*Victor Wang*
