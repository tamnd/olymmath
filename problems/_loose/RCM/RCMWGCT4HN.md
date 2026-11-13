---
tag: RCMWGCT4HN
kind: problem
type: answer
answer: "61"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=266607
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A scientist begins an experiment with a cell culture that starts with some integer number of identical cells. After the first second, one of the cells dies, and every two seconds from there another cell will die (so one cell dies every odd-numbered second from the starting time). Furthermore, after exactly $60$ seconds, all of the living cells simultaneously split into two identical copies of itself, and this continues to happen every $60$ seconds thereafter. After performing the experiment for awhile, the scientist realizes the population of the culture will be unbounded and quickly shuts down the experiment before the cells take over the world. What is the smallest number of cells that the experiment could have started with?

$\text{(A) }30 \text{(B) }31 \text{(C) }60 \text{(D) }61 \text{(E) }62$
