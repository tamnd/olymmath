---
tag: BZM121WJZJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237703
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the game of Yahtzee , players have to achieve various combinations of values with $5$ dice. In a round, a player can roll the dice three times. At the second and third rolls, he can choose which dice to re-roll and which to keep. What is the probability that a player achieves at least four $6$'s in a round, given that he plays with the optimal strategy to maximise this probability?

Writing the answer as $p/q$ where $p$ and $q$ are coprime, you should submit the sum of all prime factors of $p$, counted with multiplicity. So for example if you obtained $\frac{p}{q} = \frac{3^4 \cdot 11}{ 2^5 \cdot 5}$ then the submitted answer should be $4 \cdot 3 + 11 = 23$.
