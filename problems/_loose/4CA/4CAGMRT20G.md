---
tag: 4CAGMRT20G
kind: problem
type: answer
answer: ^{2}-+b^{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=190713
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the complex numbers $a, b, c$ such that $1+c+c^{2}=0$. Prove that

$$
\left(a c^{2}+b c\right)\left(b c^{2}+a c\right)=a^{2}-a b+b^{2}
$$