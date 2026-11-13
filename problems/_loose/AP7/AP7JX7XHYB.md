---
tag: AP7JX7XHYB
kind: problem
type: answer
answer: "7"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=185985
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a dark room, there are 20 individual gloves of the same size, namely

- 5 white gloves for the right hand
- 5 white gloves for the left hand
- 5 black gloves for the right hand
- 5 black gloves for the left hand

Two gloves are considered a matching pair if and only if they are of the same color and one is for the right hand, the other for the left hand.

A draw is understood to be the removal of a single glove, without the possibility of selecting by color and form. A game of $n$ draws consists of performing $n$ draws in succession, collecting the gloves thus removed, and only after these $n$ draws determining whether there is (at least) one matching pair among the $n$ removed gloves. The game is considered successful if and only if this is the case.

a) Determine the smallest natural number $n$ with the property that a game of $n$ draws is guaranteed to be successful!

b) Determine the smallest natural number $k$ with the property that a game of $k$ draws is successful with a probability greater than 0.99!
