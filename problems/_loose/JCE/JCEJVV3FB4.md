---
tag: JCEJVV3FB4
kind: problem
type: answer
answer: \frac{7}{3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=233541
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\{x\}$ denote the fractional part of $x$, which means the unique real $0\leq\{x\}<1$ such that $x-\{x\}$ is an integer. Let $f_{a,b}(x)=\{x+a\}+2\{x+b\}$ and let its range be $[m_{a,b},M_{a,b})$. Find the minimum value of $M_{a,b}$ as $a$ and $b$ range along all real numbers.
