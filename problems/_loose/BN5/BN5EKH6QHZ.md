---
tag: BN5EKH6QHZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268652
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A magician randomly lays out $13$ distinct-valued cards a row, and then he passes his hand from left to right over the cards until his hand hovers over the least or greatest-valued card in the line. He removes that card. The number of cards he passes over is all the cards to the left of the removed card. If he keeps repeating this process on the row of cards until none remain. If $x$ is the expected number of cards he will pass over, compute $x - \sum^{13}_{n=2}\frac{1}{n}$.
