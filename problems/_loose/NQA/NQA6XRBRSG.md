---
tag: NQA6XRBRSG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1339723
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=14565
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2016
    source: hf-ai-mo-aops
    label: 2016 Online Math Open Problems
---
Let $\mathbb N$ denote the set of positive integers. Let $f: \mathbb N \to \mathbb N$ be a function such that the following conditions hold:

(a) For any $n\in \mathbb N$ , we have $f(n) | n^{2016}$ .
(b) For any $a,b,c\in \mathbb N$ satisfying $a^2+b^2=c^2$ , we have $f(a)f(b)=f(c)$ .

Over all possible functions $f$ , determine the number of distinct values that can be achieved by $f(2014)+f(2)-f(2016)$ .

*Proposed by Vincent Huang*
