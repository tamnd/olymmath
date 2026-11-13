---
tag: GNRW6SF82E
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2007 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h428241
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28828
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228845
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2007 Tournament Of Towns
---
Nancy shuffles a deck of $52$ cards and spreads the cards out in a circle face up, leaving one spot empty. Andy, who is in another room and does not see the cards, names a card. If this card is adjacent to the empty spot, Nancy moves the card to the empty spot, without telling Andy; otherwise nothing happens. Then Andy names another card and so on, as many times as he likes, until he says "stop."

**(a)** Can Andy guarantee that after he says "stop," no card is in its initial spot?**(b)** Can Andy guarantee that after he says "stop," the Queen of Spades is not adjacent to
the empty spot?
