---
tag: ERCCH8GGSS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 ELMO Shortlist
    url: https://artofproblemsolving.com/community/c6h3100561
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=69328
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=260351
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: elmo-sl/2023
    source: hf-ai-mo-aops
    label: 2023 ELMO Shortlist
---
Alice is performing a magic trick. She has a standard deck of 52 cards, which she may order beforehand. She invites a volunteer to pick an integer $0\le n\le 52$, and cuts the deck into a pile with the top $n$ cards and a pile with the remaining $52-n$. She then gives both piles to the volunteer, who riffles them together and hands the deck back to her face down. (Thus, in the resulting deck, the cards that were in the deck of size $n$ appear in order, as do the cards that were in the deck of size $52-n$.)

Alice then flips the cards over one-by-one from the top. Before flipping over each card, she may choose to guess the color of the card she is about to flip over. She stops if she guesses incorrectly. What is the maximum number of correct guesses she can guarantee?

*Proposed by Espen Slettnes*
