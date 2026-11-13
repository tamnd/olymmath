---
tag: G6WP2XYVWR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 Saint Petersburg Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3058050
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=57284
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250074
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-spb/2000
    source: hf-ai-mo-aops
    label: 2000 Saint Petersburg Mathematical Olympiad
---
The numbers $1,2,\dots,2000$ are written on the board. Two players are playing a game with alternating moves. A move consists of erasing two number $a,b$ and writing $a^b$ . After some time only one number is left. The first player wins, if the numbers last digit is $2$ , $7$ or $8$ . If not, the second player wins. Who has a winning strategy?

*Proposed by V. Frank*
