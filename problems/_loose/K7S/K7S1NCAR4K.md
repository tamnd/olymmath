---
tag: K7S1NCAR4K
kind: problem
type: answer
answer: 0\leqslant2^{2}a_{2}+2^{3}a_{3}+\cdots+2^{n-1}a_{n-1}+2^{n}a_{n}\leqslant(\frac{n-2}{n})^{n}+1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=127943
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the equation $x^{n}-x^{n-1}+a_{2} x^{n-2}+\cdots+a_{n-1} x+a_{n}=0(n \geqslant 2)$ have $n$ non-negative real roots. Prove:
$$
0 \leqslant 2^{2} a_{2}+2^{3} a_{3}+\cdots+2^{n-1} a_{n-1}+2^{n} a_{n} \leqslant\left(\frac{n-2}{n}\right)^{n}+1 .
$$
