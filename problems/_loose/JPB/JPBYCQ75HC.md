---
tag: JPBYCQ75HC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246922
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a,b>1$ be two real numbers. Prove that $a>b$ if and only if there exists a function $f: (0,\infty)\to\mathbb{R}$ such that

i) the function $g:\mathbb{R}\to\mathbb{R}$, $g(x)=f(a^x)-x$ is increasing;

ii) the function $h:\mathbb{R}\to\mathbb{R}$, $h(x)=f(b^x)-x$ is decreasing.
