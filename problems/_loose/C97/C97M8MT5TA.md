---
tag: C97M8MT5TA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263950
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer. Aavid has a card deck consisting of $ 2n$ cards, each colored with one of $n$ colors such that every color is on exactly two of the cards. The $2n$ cards are randomly ordered in a stack. Every second, he removes the top card from the stack and places the card into an area called the pit. If the other card of that color also happens to be in the pit, Aavid collects both cards of that color and discards them from the pit.
Of the $(2n)!$ possible original orderings of the deck, determine how many have the following property: at every point, the pit contains cards of at most two distinct colors.
