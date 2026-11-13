---
tag: Y3M6VVWEHN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247134
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We consider $S$ a set of odd positive interger numbers with $n\geq 3$ elements such that no element divides another element. We say that a set $S$ is $beautiful$ if for any 3 elements from $S$, there is one the divides the sum of the other 2. We call a beautiful set $S$ $maximal$ if we can't add another number to the set such that $S$ will still be beautiful. Find the values of $n$ for which there exists a $maximal$ set.
