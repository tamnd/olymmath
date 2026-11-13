---
tag: NYGAWS21ZP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269293
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A function $f:[0,\infty)\to\mathbb R\setminus\{0\}$ is called *slowly changing* if for any $t>1$ the limit $\lim_{x\to\infty}\frac{f(tx)}{f(x)}$ exists and is equal to $1$. Is it true that every slowly changing function has for sufficiently large $x$ a constant sign (i.e., is it true that for every slowly changing $f$ there exists an $N$ such that for every $x,y>N$ we have $f(x)f(y)>0$?)
