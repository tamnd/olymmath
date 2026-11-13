---
tag: 7AET6D96PM
kind: problem
type: answer
answer: \frac{n(n-1)}{2} + 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246052
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer. There is a collection of cards that meets the following properties:
$\bullet$Each card has a number written in the form $m!$, where $m$ is a positive integer.
$\bullet$For every positive integer $t\le n!$, it is possible to choose one or more cards from the collection in such a way
$\text{ }$that the sum of the numbers of those cards is $t$.
Determine, based on $n$, the smallest number of cards that this collection can have.
