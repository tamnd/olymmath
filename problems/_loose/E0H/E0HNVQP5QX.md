---
tag: E0HNVQP5QX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1935 Moscow Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1877134
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=56492
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249390
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-moscow/1935
    source: hf-ai-mo-aops
    label: 1935 Moscow Mathematical Olympiad
---
Find four consecutive terms $a, b, c, d$ of an arithmetic progression and four consecutive terms $a_1, b_1, c_1, d_1$ of a geometric progression such that $$ \begin{cases}a + a_1 = 27 \ b + b_1 = 27 c + c_1 = 39 d + d_1 = 87\end{cases} $$ .
