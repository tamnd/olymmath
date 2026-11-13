---
tag: BB2C0N6K4K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2004 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h2015801
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28692
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228714
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2004 Tournament Of Towns
---
The audience shuffles a deck of $36$ cards, containing $9$ cards in each of the suits spades, hearts, diamonds and clubs. A magician predicts the suit of the cards, one at a time, starting with the uppermost one in the face-down deck. The design on the back of each card is an arrow.
An assistant examines the deck without changing the order of the cards, and points the arrow on the back each card either towards or away from the magician, according to some system agreed upon in advance with the magician. Is there such a system which enables the magician to guarantee the correct prediction of the suit of at least
(a) $19$ cards;
(b) $20$ cards?
