---
tag: E6P9TNKDYD
kind: problem
type: answer
answer: 2^{1990}-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=187270
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The function $\mathrm{f}$ is defined on the non-negative integers. $\mathrm{f}\left(2^{\mathrm{n}}-1\right)=0$ for $\mathrm{n}=0,1,2, \ldots$. If $\mathrm{m}$ is not of the form $2^{n}-1$, then $f(m)=f(m+1)+1$. Show that $f(n)+n=2^{k}-1$ for some $k$, and find $\mathrm{f}\left(2^{1990}\right)$
