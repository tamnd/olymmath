---
tag: GR41XQ52HX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268366
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$f(n)$ denotes the largest integer $k$ such that that $2^k|n$.
$2006$ integers $a_i$ are such that $a_1<a_2<...<a_{2016}$.
Is it possible to find integers $k$ where $1 \le k\le 2006$ and $f(a_i-a_j)\ne k$ for every $1 \le j \le i \le 2006$ ?
