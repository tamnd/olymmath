---
tag: WWVWM4AFH5
kind: problem
type: answer
answer: "41"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213663
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $n$ cards numbered and stacked in increasing order from up to down (i.e. the card in the top is the number 1, the second is the 2, and so on...). With this deck, the next steps are followed:

-the first card (from the top) is put in the bottom of the deck.
-the second card (from the top) is taken away of the deck.
-the third card (from the top) is put in the bottom of the deck.
-the fourth card (from the top) is taken away of the deck.
- ...

The proccess goes on always the same way: the card in the top is put at the end of the deck and the next is taken away of the deck, until just one card is left. Determine which is that card.
