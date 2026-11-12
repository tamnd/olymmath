---
tag: AQME0527FG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 JBMO Shortlist
    url: https://artofproblemsolving.com/community/c6h3099029
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=26184
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: jbmo-sl/2022
    source: hf-ai-mo-aops
    label: 2022 JBMO Shortlist
---
There are $200$ boxes on the table. In the beginning, each of the boxes contains a positive integer (the integers are not necessarily distinct). Every minute, Alice makes one move. A move consists of the following. First, she picks a box $X$ which contains a number $c$ such that $c = a + b$ for some numbers $a$ and $b$ which are contained in some other boxes. Then she picks a positive integer $k > 1$ . Finally, she removes $c$ from $X$ and replaces it with $kc$ . If she cannot make any mobes, she stops. Prove that no matter how Alice makes her moves, she won't be able to make infinitely many moves.
