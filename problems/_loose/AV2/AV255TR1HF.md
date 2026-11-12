---
tag: AV255TR1HF
kind: problem
type: answer
answer: "2550"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=55776
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Vasya has 100 bank cards. Vasya knows that one of the cards has 1 ruble, another has 2 rubles, and so on, with the last card having 100 rubles, but he does not know how much money is on which card. Vasya can insert a card into an ATM and request a certain amount. The ATM dispenses the requested amount if it is available on the card, does nothing if the money is not there, and swallows the card in any case. The ATM does not show how much money was on the card. What is the largest amount of money Vasya can guarantee to get?
