---
tag: S6C4HC2FH6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1982 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h1898789
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=27887
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228236
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 1982 Tournament Of Towns
---
There are $36$ cards in a deck arranged in the sequence spades, clubs, hearts, diamonds, spades, clubs, hearts, diamonds, etc. Somebody took part of this deck off the top, turned it upside down, and cut this part into the remaining part of the deck (i.e. inserted it between two consecutive cards). Then four cards were taken off the top, then another four, etc. Prove that in any of these sets of four cards, all the cards are of different suits.

(A Merkov, Moscow)
