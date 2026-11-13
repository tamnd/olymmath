---
tag: GH1D1HJFFT
kind: problem
type: answer
answer: \binom{q+1}{2}s + \binom{q}{2}(n-s-1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209122
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We have some cards that have the same look, but at the back of some of them is written $0$ and for the others $1$.(We can't see the back of a card so we can't know what's the number on it's back). we have a machine. we give it two cards and it gives us the product of the numbers on the back of the cards. if we have $m$ cards with $0$ on their back and $n$ cards with $1$ on their back, at least how many times we must use the machine to be sure that we get the number $1$?
