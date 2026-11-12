---
tag: 26TV8QZ4PF
kind: problem
type: answer
answer: P(A)=1-q^{n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=31677
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A_{1}, A_{2}, \ldots, A_{i}, \ldots, A_{n}$ be $n$ independent events in total. The probabilities of each event $A_{i}$ occurring are $p_{i}$ $(i=1,2, \ldots, n)$. Suppose that as a result of the trial, all events or some of them may occur, or none of them may occur. Find the probability of at least one of the events $A_{i}$ occurring, if the probabilities $p_{i}:$ a) are different; b) are equal to each other.
