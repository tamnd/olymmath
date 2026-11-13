---
tag: K6FG45CS4Z
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Hong Kong TST
    url: https://artofproblemsolving.com/community/c6h3362409
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=40764
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Hong_Kong/train/0000.parquet#row=412
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hk-pc/2022
    source: hf-ai-mo-aops
    label: 2022 Hong Kong TST
  - at: hk-pc
    source: hf-mathnet
    label: Hong Kong IMO HK TST
---
In a chess tournament there are $100$ players. On each day of the tournament, each player is designated to be 'white', 'black' or 'idle', and each 'white' player will play a game against every 'black' player. (You may assume that all games fixed for the day can be finished within that day.) At the end of the tournament, it was found that any two players have met exactly once. What is the minimum duration of days that the tournament lasts?
