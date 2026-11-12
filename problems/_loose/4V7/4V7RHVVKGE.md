---
tag: 4V7RHVVKGE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2007 Mongolian Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2520127
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=48639
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo/2007
    source: hf-ai-mo-aops
    label: 2007 Mongolian Mathematical Olympiad
---
Given a $n\times n$ table with non-negative real entries such that the sums of entries in each column and row are equal, a player plays the following game: The step of the game consists of choosing $n$ cells, no two of which share a column or a row, and subtracting the same number from each of the entries of the $n$ cells, provided that the resulting table has all non-negative entries. Prove that the player can change all entries to zeros.
