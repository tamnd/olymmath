---
tag: WTM3P2R2AB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219669
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $h(t)$ and $f(t)$ be polynomials such that $h(t)=t^2$ and $f_n(t)=h(h(h(h(h...h(t))))))-1$ where $h(t)$ occurs $n$ times. Prove that $f_n(t)$ is a factor of $f_N(t)$ whenever $n$ is a factor of $N$
