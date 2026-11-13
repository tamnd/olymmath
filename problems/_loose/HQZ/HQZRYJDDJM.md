---
tag: HQZRYJDDJM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=4101
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=151277
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hmmt/2011
    source: hf-numina-olympiads
    label: HMMT February
---
The ordered pairs $(2011,2),(2010,3),(2009,4), \ldots,(1008,1005),(1007,1006)$ are written from left to right on a blackboard. Every minute, Elizabeth selects a pair of adjacent pairs $\left(x_{i}, y_{i}\right)$ and $\left(x_{j}, y_{j}\right)$, with $\left(x_{i}, y_{i}\right)$ left of $\left(x_{j}, y_{j}\right)$, erases them, and writes $\left(\frac{x_{i} y_{i} x_{j}}{y_{j}}, \frac{x_{i} y_{i} y_{j}}{x_{j}}\right)$ in their place. Elizabeth continues this process until only one ordered pair remains. How many possible ordered pairs $(x, y)$ could appear on the blackboard after the process has come to a conclusion?
