---
tag: FFHV6W71JS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=79003
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Alice and Bob are playing a game on a complete graph $G$ with 2014 vertices. They take turns, starting with Alice. On each turn, Alice orients an unoriented edge of $G$. On each turn, Bob chooses an integer $m$, with $1 \leq m \leq 1000$ and orients $m$ unoriented edges of $G$. The game ends when all edges are oriented. Alice wins if and only if there is a cycle. Does Alice have a winning strategy?
