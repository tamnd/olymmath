---
tag: 3HSYY101KJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: Russian TST 2016
    url: https://artofproblemsolving.com/community/c6h3056217
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=57171
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249990
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-tst/2016
    source: hf-ai-mo-aops
    label: Russian TST 2016
---
There are 100 saucers in a circle. Two people take turns putting marmalade of various colors in empty saucers. The first person can choose one or three empty saucers and fill each of them with marmalade of arbitrary color. The second one can choose one empty saucer and fill it with marmalade of arbitrary color.

There should not be two adjacent saucers with marmalade of the same color. The game ends when all the saucers are filled. The loser is the last player to introduce a new color of marmalade into the game. Who has a winning strategy?
