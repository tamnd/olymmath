---
tag: 6DAT1Y83CE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=258272
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For all positive integers $ n$ less than $ 2002$, let
$$ a_n = \begin{cases} 11 & \text{if }n\text{ is divisible by }13\text{ and }14 \\
13 & \text{if }n\text{ is divisible by }11\text{ and }14 \\
14 & \text{if }n\text{ is divisible by }11\text{ and }13 \\
0 & \text{otherwise} \end{cases}
$$Calculate $ \sum_{n = 1}^{2001} a_n$.

$ \textbf{(A)}\ 448 \textbf{(B)}\ 486 \textbf{(C)}\ 1560 \textbf{(D)}\ 2001 \textbf{(E)}\ 2002$
