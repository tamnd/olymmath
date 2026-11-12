---
tag: E8YYEZEM2J
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Romanian Master of Mathematics Shortlist
    url: https://artofproblemsolving.com/community/c6h3504153
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=27734
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Alice and Bob play the following game. Bob chooses 2024 polynomials with real coefficients, $P, P_1, \ldots, P_{2023}$ , such that $1<\deg(P)<\deg(P_i),i=1,2,\dots,2023$ , and shows them all to Alice. At each step $i\ge 1$ , Alice chooses a real number $a_i>0$ such that $a_{i+1}\ge a_i+2024$ and shows Bob $a_i$ . Then either he chooses a real number $b_i$ satisfying $P_j(b_i) = P(a_i)$ for some $j$ or, if no such a $b_i$ exists, he chooses $b_i=a_i$ .
Alice wins if, at some stage, she can exhibit distinct integers $k$ and $m$ and a real number $c$ satisfying $ |b_{k+i}+c -b_{m+i}|\le 10^{-2024}$ , for all $i=1,2,\dots,2024$ . Otherwise, Bob wins. Decide who has a winning strategy.
(BULGARIA, *Dragomir Grozev* )
