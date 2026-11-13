---
tag: 8M3QDAWM8Y
kind: problem
type: answer
answer: S_{n}<\frac{1}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85038
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that

$$
\frac{1}{3!}+\frac{5}{4!}+\frac{11}{5!}+\ldots+\frac{n^{2}+n-1}{(n+2)!}<\frac{1}{2}
$$

for any natural number $n$. With $n!$ (read as $n$ factorial) we denote the product of the first $n$ non-zero natural numbers: $n!=1 \cdot 2 \cdot 3 \cdot \ldots \cdot n$.
