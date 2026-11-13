---
tag: VYN0XPFACF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1997 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h38388
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35707
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234221
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/1997
    source: hf-ai-mo-aops
    label: 1997 China Team Selection Test
---
There are $ n$ football teams in a round-robin competition where every 2 teams meet once. The winner of each match receives 3 points while the loser receives 0 points. In the case of a draw, both teams receive 1 point each. Let $ k$ be as follows: $ 2 \leq k \leq n - 1$ . At least how many points must a certain team get in the competition so as to ensure that there are at most $ k - 1$ teams whose scores are not less than that particular team's score?
