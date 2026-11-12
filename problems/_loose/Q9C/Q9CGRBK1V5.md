---
tag: Q9CGRBK1V5
kind: problem
type: answer
answer: "59"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=12272
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
9-6-1. Six pirates - a captain and five members of his crew - are sitting around a campfire facing the center. They need to divide a treasure: 180 gold coins. The captain proposes a way to divide the treasure (i.e., how many coins each pirate should receive: each pirate will receive a non-negative integer number of coins; different pirates may receive different numbers of coins). After this, the other five pirates vote on the captain's proposal. A pirate will vote "for" only if they receive more coins than each of their two neighbors. The proposal is accepted if at least three out of the five crew members vote "for."

What is the maximum number of coins the captain can get with this method of dividing the treasure?
