---
tag: GWAASVENXB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 AMC 10
    url: https://artofproblemsolving.com/community/c6h3199227
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=64804
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=201772
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: amc10
    source: hf-ai-mo-aops
    label: 2023 AMC 10
---
Sonya the frog chooses a point uniformly at random lying within the square $[0, 6] \times [0, 6]$ in the coordinate plane and hops to that point. She then randomly chooses a distance uniformly at random from $[0, 1]$ and a direction uniformly at random from {north, south east, west}. All he choices are independent. She now hops the distance in the chosen direction. What is the probability that she lands outside the square? $\textbf{(A) } \frac{1}{6} \textbf{(B) } \frac{1}{12} \textbf{(C) } \frac{1}{4} \textbf{(D) } \frac{1}{10} \textbf{(E) } \frac{1}{9}$
