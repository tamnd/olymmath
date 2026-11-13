---
tag: 90THKYBJ8B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267194
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Euclid places a morsel of food at the point $(0,0)$ and an ant at the point $(1,2)$. Every second, the ant walks one unit in one of the four coordinate directions. However, whenever the ant moves to $(x,\pm 3)$, Euclid's malicious brother Mobius picks it up and puts it at $(-x,\mp 2)$, and whenever it moves to $(\pm 2,y)$, his cousin Klein puts it at $(\mp 1,y)$. If $p$ and $q$ are relatively prime positive integers such that $\tfrac pq$ is the expected number of steps the ant takes before reaching the food, find $p+q$.
