---
tag: VWZHENT2S2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=264373
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A function $f:\{ 1,2,3,\cdots ,2016\}\rightarrow \{ 1,2,3,\cdots , 2016\}$ is called *good* if the function $g(n)=|f(n)-n|$ is injective. Furthermore, a good function $f$ is called *excellent* if there exists another good function $f'$ such that $f(n)-f'(n)$ is nonzero for exactly one value of $n$. Let $N$ be the number of good functions that are not excellent. Find the remainder when $N$ is divided by $1000$.

*Proposed by Nathan Ramesh
