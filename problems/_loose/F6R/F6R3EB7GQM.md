---
tag: F6R3EB7GQM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1734504
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=16862
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2018
    source: hf-ai-mo-aops
    label: 2018 Online Math Open Problems
---
For positive integers $k,n$ with $k\leq n$ , we say that a $k$ -tuple $\left(a_1,a_2,\ldots,a_k\right)$ of positive integers is *tasty* if

- there exists a $k$ -element subset $S$ of $[n]$ and a bijection $f:[k]\to S$ with $a_x\leq f\left(x\right)$ for each $x\in [k]$ ,
- $a_x=a_y$ for some distinct $x,y\in [k]$ , and
- $a_i\leq a_j$ for any $i < j$ .

For some positive integer $n$ , there are more than $2018$ tasty tuples as $k$ ranges through $2,3,\ldots,n$ . Compute the least possible number of tasty tuples there can be.

Note: For a positive integer $m$ , $[m]$ is taken to denote the set $\left\{1,2,\ldots,m\right\}$ .

*Proposed by Vincent Huang and Tristan Shin*
