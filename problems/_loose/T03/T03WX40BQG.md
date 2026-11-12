---
tag: T03WX40BQG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h1223195
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=14486
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2016
    source: hf-ai-mo-aops
    label: 2016 NIMO Problems
---
Let $(a_1,a_2,\ldots, a_{13})$ be a permutation of $(1, 2, \ldots, 13)$ . Ayvak takes this permutation and makes a series of *moves*, each of which consists of choosing an integer $i$ from $1$ to $12$ , inclusive, and swapping the positions of $a_i$ and $a_{i+1}$ . Define the *weight* of a permutation to be the minimum number of moves Ayvak needs to turn it into $(1, 2, \ldots, 13)$ .

The arithmetic mean of the weights of all permutations $(a_1, \ldots, a_{13})$ of $(1, 2, \ldots, 13)$ for which $a_5 = 9$ is $\frac{m}{n}$ , for coprime positive integers $m$ and $n$ . Find $100m+n$ .

*Proposed by Alex Gu*
