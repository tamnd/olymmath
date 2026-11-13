---
tag: FTF8ZXASMG
kind: problem
type: answer
answer: 2^{n+1} \mid p-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243659
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p\geq 3$ a prime number, $a$ and $b$ integers such that $\gcd(a, b)=1$. Let $n$ a natural number such that $p$ divides $a^{2^n}+b^{2^n}$, prove that $2^{n+1}$ divides $p-1$.
