---
tag: WGNK1DCGX7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1953 Moscow Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1892263
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=56735
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249633
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-moscow/1953
    source: hf-ai-mo-aops
    label: 1953 Moscow Mathematical Olympiad
---
a) Solve the system $\begin{cases}
x_1 + 2x_2 + 2x_3 + 2x_4 + 2x_5 = 1
x_1 + 3x_2 + 4x_3 + 4x_4 + 4x_5 = 2
x_1 + 3x_2 + 5x_3 + 6x_4 + 6x_5 = 3
x_1 + 3x_2 + 5x_3 + 7x_4 + 8x_5 = 4
x_1 + 3x_2 + 5x_3 + 7x_4 + 9x_5 = 5 \end{cases}$ b) Solve the system $\begin{cases}
x_1 + 2x_2 + 2x_3 + 2x_4 + 2x_5 +...+ 2x_{100}= 1
x_1 + 3x_2 + 4x_3 + 4x_4 + 4x_5 +...+ 4x_{100}= 2
x_1 + 3x_2 + 5x_3 + 6x_4 + 6x_5 +...+ 6x_{100}= 3
x_1 + 3x_2 + 5x_3 + 7x_4 + 8x_5 +...+ 8x_{100}= 4
...
x_1 + 3x_2 + 5x_3 + 7x_4 + 9x_5 +...+ 199x_{100}= 100 \end{cases}$
