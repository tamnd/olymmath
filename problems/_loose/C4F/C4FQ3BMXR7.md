---
tag: C4FQ3BMXR7
kind: problem
type: answer
answer: n-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=148879
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n>1$ be a positive integer. Ana and Bob play a game with other $n$ people. The group of $n$ people form a circle, and Bob will put either a black hat or a white one on each person's head. Each person can see all the hats except for his own one. They will guess the color of his own hat individually.

Before Bob distribute their hats, Ana gives $n$ people a strategy which is the same for everyone. For example, it could be "guessing the color just on your left" or "if you see an odd number of black hats, then guess black; otherwise, guess white".

Ana wants to maximize the number of people who guesses the right color, and Bob is on the contrary.

Now, suppose Ana and Bob are clever enough, and everyone forms a strategy strictly. How many right guesses can Ana guarantee?

*Proposed by China.*
