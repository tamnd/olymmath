---
tag: HQ5DKC3X5F
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 CMIMC
    url: https://artofproblemsolving.com/community/c6h2791498
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=175
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2022
    source: hf-ai-mo-aops
    label: 2022 CMIMC
---
Daniel has a (mostly) standard deck of 54 cards, consisting of 4 suits each containing the ranks 1 to 13 as well as 2 jokers. Daniel plays the following game: He shuffles the deck uniformly randomly and then takes all of the cards that end up strictly between the two jokers. He then sums up the ranks of all the cards he has taken and calls that his score.

Let $p$ be the probability that his score is a multiple of 13. There exists relatively prime positive integers $a$ and $b,$ with $b$ as small as possible, such that $|p - a/b| < 10^{-10}.$ What is $a/b?$ *Proposed by Dilhan Salgado, Daniel Li*
