---
tag: AQ016W8QNT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33227
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Four coins are tossed. Let $\xi_{i}=1$ if the $i$-th coin lands heads up, and $\xi_{i}=0$ otherwise, $i=1,2,3,4$. Construct the distribution series of the random variable $\eta=\xi_{1}+\xi_{2}-\xi_{3}-\xi_{4}$ and find, using this series, the probability $\mathrm{P}(\eta<1)$.
