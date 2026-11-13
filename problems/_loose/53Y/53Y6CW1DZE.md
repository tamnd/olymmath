---
tag: 53Y6CW1DZE
kind: problem
type: answer
answer: "465"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=171379
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a computer game, we can earn an integer score each time we play. On the list that keeps track of the best 30 scores, the game's creator has displayed the scores $30,29,28, \ldots, 1$ next to fantasy names. If our score in a game - under our own name - is higher than the smallest score currently on the list, it will be added to the list, and the smallest score will logically be removed from the list. In the case of equal scores, the score that was added last will be removed from the list. The ranking is done "from the bottom," meaning we will only surpass the results on the list where we have achieved a higher score. Assuming that we get on the list after each game, what is the minimum number of games we need to play to ensure that our name appears next to every score on the list?
