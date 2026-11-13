---
tag: RQZBFQRFR8
kind: problem
type: answer
answer: \frac{n(n-1)}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=73359
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
a) A championship will have 7 competitors. Each of them will play exactly one game against all the others. What is the total number of games in the championship?

b) A championship will have $n$ competitors and each of them will play exactly one game against all the others. Verify that the total number of games is $\frac{n \cdot(n-1)}{2}$.

c) A competitor $A$ is called a master of the championship if every other player either lost to $A$ or lost to someone who lost to $A$. Verify that every championship in which each player plays exactly once against all the others and there are no ties, always admits a master.

d) João and Maria were in a tournament where each athlete was supposed to play against the other exactly once. However, Maria had a health issue and abandoned the tournament after playing 10 games, and João had to leave after his first game. At the end of the day, a total of 55 games were counted. Was the game João played against Maria?
