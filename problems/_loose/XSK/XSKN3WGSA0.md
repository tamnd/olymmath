---
tag: XSKN3WGSA0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=84783
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two lists of integers are proposed. One list contains $1,6,11, \cdots, 46$ and another contains $4,9,14, \cdots, 49$. An allowed operation is to take two elements $x$ and $y$ from one list, erase them, and write $\frac{x+y}{3}$ in the other list (which does not need to be an integer).

After a finite number of operations, only one element remains in each list. Show that these two elements are not equal.
