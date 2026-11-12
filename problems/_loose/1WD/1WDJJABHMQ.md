---
tag: 1WDJJABHMQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Balkan MO Shortlist
    url: https://artofproblemsolving.com/community/c6h3557390
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=21362
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: balkan-sl/2024
    source: hf-ai-mo-aops
    label: 2024 Balkan MO Shortlist
---
Let $n\geq 3$ be an integer. Alice and Bob play the following game on the vertices of a regular $n$ -gon. Alice places her token on a vertex of the n-gon. Afterwards Bob places his token on another vertex of the n-gon. Then, with Alice playing first, they move their tokens alternately as follows for $2n$ rounds: In Alice's turn on the $k$ -th round, she moves her token $k$ positions clockwise or anticlockwise. In Bob's turn on the $k$ -th round, he moves his token $1$ position clockwise or anticlockwise. If at the end of any person's turn the two tokens are on the same vertex, then Alice wins the game, otherwise Bob wins. Decide for each value of $n$ which player has a winning strategy.
