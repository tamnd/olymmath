---
tag: KQ36QTJSFH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261924
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A BWM tree is defined recursively:

- An empty tree is a BWM tree of height 0 and size 0.

- A nonempty BWM tree consists of a root node and three subtrees, each of which is itself a (possibly empty) BWM tree. The height of the tallest of the subtrees must be at most 2 more than the height of the shortest.

- The height of a nonempty BWM tree is one more than the height of its tallest subtree, and the size of a nonempty BWM tree is one more than the sum of the sizes of the subtrees.

What is the minimum size of a height-10 BWM tree?

*Proposed by Jacob Weiner*
