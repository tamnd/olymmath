---
tag: FNZPRRGST0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1996 Irish Math Olympiad
    url: https://artofproblemsolving.com/community/c6h286284
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44758
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240996
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo/1996
    source: hf-ai-mo-aops
    label: 1996 Irish Math Olympiad
---
The Fibonacci sequence is defined by $ F_0=0, F_1=1$ and $ F_{n+2}=F_n+F_{n+1}$ for $ n \ge 0$ . Prove that:
$ (a)$ The statement $ "F_{n+k}-F_n$ is divisible by $ 10$ for all $ n \in \mathbb{N}"$ is true if $ k=60$ but false for any positive integer $ k<60$ .
$ (b)$ The statement $ "F_{n+t}-F_n$ is divisible by $ 100$ for all $ n \in \mathbb{N}"$ is true if $ t=300$ but false for any positive integer $ t<300$ .
