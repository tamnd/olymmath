---
tag: 8MQQGJXK0N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237702
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are red and blue balls in an urn : $1024$ in total. In one round, we do the following:
we draw the balls from the urn two by two. After all balls have been drawn, we put a new ball back into the urn for each pair of drawn balls: the colour of the new ball depends on that of the drawn pair. For two red balls drawn, we put back a red ball. For two blue balls, we put back a blue ball. For a red and a blue ball, we put back a black ball. For a red and a black ball, we put back a red ball. For a blue and a black ball, we put back a blue ball. Finally, for two black balls we put back a black ball.
Then the next round begins. After $10$ rounds, a single ball remains in the urn, which is red. What is the maximal number of blue balls that might have been in the urn at the very beginning?
