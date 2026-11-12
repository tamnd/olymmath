---
tag: J8ZRJGEF2R
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 ELMO Shortlist
    url: https://artofproblemsolving.com/community/c6h3344233
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=69346
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: elmo-sl/2024
    source: hf-ai-mo-aops
    label: 2024 ELMO Shortlist
---
Allen and Alan play a game. A nonconstant polynomial $P(x,y)$ with real coefficients and a positive integer $d$ greater than the degree of $P$ are known to both Allen and Alan. Alan thinks of a polynomial $Q(x,y)$ with real coefficients and degree at most $d$ and keeps it secret. Allen can make queries of the form $(s,t)$ , where $s$ and $t$ are real numbers such that $P(s,t)\neq0$ . Alan must respond with the value $Q(s,t)$ . Allen's goal is to determine whether $P$ divides $Q$ . Find (in terms of $P$ and $d$ ) the smallest positive integer, $g$ , such that Allen can always achieve this goal making no more than $g$ queries.

*Linus Tang*
