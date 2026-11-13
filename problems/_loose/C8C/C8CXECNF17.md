---
tag: C8CXECNF17
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250799
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=361
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sa-samc
    source: hf-mathnet
    label: Saudi Arabia SAUDI ARABIAN MATHEMATICAL COMPETITIONS
---
Given a set of $2^{2016}$ cards with the numbers $1,2, ..., 2^{2016}$ written on them. We divide the set of cards into pairs arbitrarily, from each pair, we keep the card with larger number and discard the other. We now again divide the $2^{2015}$ remaining cards into pairs arbitrarily, from each pair, we keep the card with smaller number and discard the other. We now have $2^{2014}$ cards, and again divide these cards into pairs and keep the larger one in each pair. We keep doing this way, alternating between keeping the larger number and keeping the smaller number in each pair, until we have just one card left. Find all possible values of this final card.
