---
tag: QQX6M9R69Y
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h3152685
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73338
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pumac/2022
    source: hf-ai-mo-aops
    label: 2022 Princeton University Math Competition
---
Patty is standing on a line of planks playing a game. Define a block to be a sequence of adjacent planks, such that both ends are not adjacent to any planks. Every minute, a plank chosen uniformly at random from the block that Patty is standing on disappears, and if Patty is standing on the plank, the game is over. Otherwise, Patty moves to a plank chosen uniformly at random within the block she is in; note that she could end up at the same plank from which she started. If the line of planks begins with $n$ planks, then for sufficiently large n, the expected number of minutes Patty lasts until the game ends (where the first plank disappears a minute after the game starts) can be written as $P(1/n)f(n) + Q(1/n)$ , where $P,Q$ are polynomials and $f(n) =\sum^n_{i=1}\frac{1}{i}$ . Find $P(2023) + Q(2023)$ .
