---
tag: 9WTW6T4PRC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261756
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
An $\textit{access pattern}$ $\pi$ is a permutation of $\{1,2,\dots,50\}$ describing the order in which some $50$ memory addresses are accessed. We define the $\textit{locality}$ of $\pi$ to be how much the program jumps around the memory, or numerically, $$\sum_{i=2}^{50}\left\lvert\pi(i)-\pi(i-1)\right\rvert.$$ If $\pi$ is a uniformly randomly chosen access pattern, what is the expected value of its locality?
