---
tag: 9G2BEJW2TH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=238713
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The domain of a function $f$ is $\mathbb{N}$ (The set of natural numbers). The function is defined as follows : $$f(n)=n+\lfloor\sqrt{n}\rfloor$$ where $\lfloor k\rfloor$ denotes the nearest integer smaller than or equal to $k$. Prove that, for every natural number $m$, the following sequence contains at least one perfect square $$m,~f(m),~f^2(m),~f^3(m),\cdots$$ The notation $f^k$ denotes the function obtained by composing $f$ with itself $k$ times.
