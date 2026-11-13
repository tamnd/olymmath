---
tag: S6WGC1S0CT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209556
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the game of Tristack Solitaire, you start with three stacks of cards, each with a different positive integer number of cards. At any time, you can double the number of cards in any one stack of cards by moving cards from exactly one other, larger, stack of cards to the stack you double. You win the game when any two of the three stacks have the same number of cards.

For example, if you start with stacks of $3$, $5$, and $7$ cards, then you have three possible legal moves:



- You may move $3$ cards from the $5$-card stack to the $3$-card stack, leaving stacks of $6$, $2$, and $7$ cards.

- You may move $3$ cards from the $7$-card stack to the $3$-card stack, leaving stacks of $6,$ $5$, and $4$ cards.

- You may move $5$ cards from the $7$-card stack to the $5$-card stack, leaving stacks of $3$, $10$, and $2$ cards.

Can you win Tristack Solitaire from any starting position? If so, then give a strategy for winning. If not, then explain why.
