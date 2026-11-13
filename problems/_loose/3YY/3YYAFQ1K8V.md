---
tag: 3YYAFQ1K8V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=227432
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $26$ cards and each one has a number written on it. There are two with $1$, two with $2$, two with $3$, and so on up to two with $12$ and two with $13$. You have to distribute the $26$ cards in piles so that the following two conditions are met:
$\bullet$ If two cards have the same number they are in the same pile.
$\bullet$ No pile contains a card whose number is equal to the sum of the numbers of two cards in that same pile.
Determine what is the minimum number of stacks to make. Give an example with the distribution of the cards for that number of stacks and justify why it is impossible to have fewer stacks.

Clarification: Two squares are *neighbors * if they have a common side.
