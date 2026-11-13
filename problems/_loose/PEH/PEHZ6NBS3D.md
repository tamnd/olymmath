---
tag: PEHZ6NBS3D
kind: problem
type: answer
answer: \text{composite } n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=264020
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n\ge3$ be a positive integer. Alex and Lizzie play a game. Alex chooses $n$ positive integers (not necessarily distinct), writes them on a blackboard, and does nothing further. Then, Lizzie is allowed to pick some of the numbers―but not all of them―and replace them each by their average. For example, if $n=7$ and the numbers Alex writes on the blackboard to start are $1,2,4,5,9,4,11$, then on her first turn Lizzie could pick $1,4,9$, erase them, and replace them each with the number $\tfrac{1+4+9}{3}$, leaving on the blackboard the numbers $\tfrac{14}{3},2,\tfrac{14}{3},5,\tfrac{14}{3},4,11$. Lizzie can repeat this process of selecting and averaging some numbers as often as she wants. Lizzie wins the game if eventually all of the numbers written on the blackboard are equal. Find all positive integers $n\ge3$ such that no matter what numbers Alex picks, Lizzie can win the game.
