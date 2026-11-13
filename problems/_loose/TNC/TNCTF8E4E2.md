---
tag: TNCTF8E4E2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261456
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Alice and Bob are going to play a game called extra tricky double rock paper scissors (ETDRPS). In ETDRPS, each player simultaneously selects *two * moves, one for his or her right hand, and one for his or her left hand. Whereas Alice can play rock, paper, or scissors, Bob is only allowed to play rock or scissors. After revealing their moves, the players compare right hands and left hands separately. Alice wins if she wins *strictly * more hands than Bob. Otherwise, Bob wins. For example, if Alice and Bob were to both play rock with their right hands and scissors with their left hands, then both hands would be tied, so Bob would win the game. However, if Alice were to instead play rock with both hands, then Alice would win the left hand. The right hand would still be tied, so Alice would win the game. Assuming both players play optimally, compute the probability that Alice will win the game.
