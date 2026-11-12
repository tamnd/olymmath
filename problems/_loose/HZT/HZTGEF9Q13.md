---
tag: HZTGEF9Q13
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 ELMO Shortlist
    url: https://artofproblemsolving.com/community/c6h3100581
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=69341
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: elmo-sl/2023
    source: hf-ai-mo-aops
    label: 2023 ELMO Shortlist
---
Let $d(n)$ denote the number of positive divisors of $n$. The sequence $a_0$, $a_1$, $a_2$, $\ldots$ is defined as follows: $a_0=1$, and for all integers $n\ge1$, $$a_n=d(a_{n-1})+d(d(a_{n-2}))+\cdots+ {\underbrace{d(d(\ldots d(a_0)\ldots))}_{n\text{ times}}}.$$ Show that for all integers $n\ge1$, we have $a_n\le3n$.

*Proposed by Karthik Vedula*
