---
tag: 8AQCBZ06HD
kind: problem
type: answer
answer: f(x) = a \sin x + b \cos x
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210596
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The $2^{nd}$ order differentiable function $f:\mathbb R \longrightarrow \mathbb R$ is in such a way that for every $x\in \mathbb R$ we have $f''(x)+f(x)=0$.

**a)** Prove that if in addition, $f(0)=f'(0)=0$, then $f\equiv 0$.

**b)** Use the previous part to show that there exist $a,b\in \mathbb R$ such that $f(x)=a\sin x+b\cos x$.
