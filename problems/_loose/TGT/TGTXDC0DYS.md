---
tag: TGTXDC0DYS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 BMT Spring
    url: https://artofproblemsolving.com/community/c6h2761916
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=69906
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=260841
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bmt/2015
    source: hf-ai-mo-aops
    label: 2015 BMT Spring
---
Two players play a game with a pile of $N$ coins on a table. On a player's turn, if there are $n$ coins, the player can take at most $n/2+1$ coins, and must take at least one coin. The player who grabs the last coin wins. For how many values of $N$ between $1$ and $100$ (inclusive) does the first player have a winning strategy?
