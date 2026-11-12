---
tag: 5P3SXTR55C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 All-Russian Olympiad
    url: https://artofproblemsolving.com/community/c6h589937
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10699
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/2014
    source: hf-ai-mo-aops
    label: 2014 All-Russian Olympiad
---
There are $n$ cells with indices from $1$ to $n$ . Originally, in each cell, there is a card with the corresponding index on it. Vasya shifts the card such that in the $i$ -th cell is now a card with the number $a_i$ . Petya can swap any two cards with the numbers $x$ and $y$ , but he must pay $2|x-y|$ coins. Show that Petya can return all the cards to their original position, not paying more than $|a_1-1|+|a_2-2|+\ldots +|a_n-n|$ coins.
