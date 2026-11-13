---
tag: DA7S9RR0ZV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=244257
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f:\mathbb{R}\rightarrow\mathbb{R}$ be a function defined as the maximum of a finite number of functions $g:\mathbb{R}\rightarrow\mathbb{R}$ of the form $g(x)=C\cdot10^{-|x-d|}$ (with different values of parameters $d{}$ and $C>0$). For real numbers $a<b$ we have $f(a)=f(b)$. Prove that on the segment $[a;b]$ the sum of legnths of segments on which $f$ is increasing is equal to the sum of legnths of segments on which $f$ is decreasing.
