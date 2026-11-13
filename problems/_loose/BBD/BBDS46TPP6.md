---
tag: BBDS46TPP6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2005 AMC 10
    url: https://artofproblemsolving.com/community/c6h250682
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=64374
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=200845
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: amc10
    source: hf-ai-mo-aops
    label: 2005 AMC 10
---
Team $ A$ and team $ B$ play a series. The first team to win three games wins the series. Each team is equally likely to win each game, there are no ties, and the outcomes of the individual games are independent. If team $ B$ wins the second game and team $ A$ wins the series, what is the probability that team $ B$ wins the first game?

$ \textbf{(A)}\ \frac{1}{5}
\textbf{(B)}\ \frac{1}{4}
\textbf{(C)}\ \frac{1}{3}
\textbf{(D)}\ \frac{1}{2}
\textbf{(E)}\ \frac{2}{3}$
