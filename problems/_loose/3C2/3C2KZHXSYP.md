---
tag: 3C2KZHXSYP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 AMC 10
    url: https://artofproblemsolving.com/community/c6h1593127
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=16237
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=147576
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: amc10
    source: hf-ai-mo-aops
    label: 2018 AMC 10
---
How many ordered pairs $(a, b)$ of positive integers satisfy the equation $$ a\cdot b + 63 = 20\cdot \text{lcm}(a, b) + 12\cdot\text{gcd}(a,b), $$ where $\text{gcd}(a,b)$ denotes the greatest common divisor of $a$ and $b$ , and $\text{lcm}(a,b)$ denotes their least common multiple? $\textbf{(A)}\ 0 \textbf{(B)}\ 2 \textbf{(C)}\ 4 \textbf{(D)}\ 6 \textbf{(E)}\ 8$
