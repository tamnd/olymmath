---
tag: WD258PAK3Y
kind: problem
type: answer
answer: \frac{29}{90}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=264660
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Bamal, Halvan, and Zuca are playing *The Game*. To start, they're placed at random distinct vertices on regular
hexagon $ABCDEF$. Two or more players collide when they're on the same vertex. When this happens, all the colliding players lose and the game ends. Every second, Bamal and Halvan teleport to a random vertex adjacent to their current position (each with probability $\dfrac{1}{2}$), and Zuca teleports to a random vertex adjacent to his current position, or to the vertex directly opposite him (each with probability $\dfrac{1}{3}$). What is the probability that when *The Game* ends Zuca hasn't lost?

*Proposed by Edwin Zhao*
