---
tag: 2V0QAGDB8H
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 All-Russian Olympiad
    url: https://artofproblemsolving.com/community/c6h588004
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10695
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=13151
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
Two players play a card game. They have a deck of $n$ distinct cards. About any two cards from the deck know which of them has a different (in this case, if $A$ beats $B$ , and $B$ beats $C$ , then it may be that $C$ beats $A$ ). The deck is split between players in an arbitrary manner. In each turn the players over the top card from his deck and one whose card has a card from another player takes both cards and puts them to the bottom of your deck in any order of their discretion. Prove that for any initial distribution of cards, the players can with knowing the location agree and act so that one of the players left without a card.

*E. Lakshtanov*
