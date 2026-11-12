---
tag: MDYMBS7ZY0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 China National Olympiad
    url: https://artofproblemsolving.com/community/c6h379757
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=4743
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-mo/2010
    source: hf-ai-mo-aops
    label: 2010 China National Olympiad
---
There is a deck of cards placed at every points $A_1, A_2, \ldots , A_n$ and $O$ , where $n \geq 3$ . We can do one of the following two operations at each step: $1)$ If there are more than 2 cards at some points $A_i$ , we can withdraw three cards from that deck and place one each at $A_{i-1}, A_{i+1}$ and $O$ . (Here $A_0=A_n$ and $A_{n+1}=A_1$ ); $2)$ If there are more than or equal to $n$ cards at point $O$ , we can withdraw $n$ cards from that deck and place one each at $A_1, A_2, \ldots , A_n$ .
Show that if the total number of cards is more than or equal to $n^2+3n+1$ , we can make the number of cards at every points more than or equal to $n+1$ after finitely many steps.
