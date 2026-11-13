---
tag: FFHTKXH443
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261531
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Felix is playing a card-flipping game. $n$ face-down cards are randomly colored, each with equal probability of being black or red. Felix starts at the $1$st card. When Felix is at the $k$th card, he guesses its color and then flips it over. For $k < n$, if he guesses correctly, he moves onto the $(k + 1)$-th card. If he guesses incorrectly, he gains $k$ penalty points, the cards are replaced with newly randomized face-down cards, and he moves back to card $1$ to continue guessing. If Felix guesses the $n$th card correctly, the game ends.
What is the expected number of penalty points Felix earns by the end of the game?
