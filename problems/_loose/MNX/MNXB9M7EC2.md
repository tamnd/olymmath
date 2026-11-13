---
tag: MNXB9M7EC2
kind: problem
type: answer
answer: f(x)=[\frac{\sqrt{5}+1}{2}x+\frac{\sqrt{5}-1}{2}]
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=120768
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Does there exist a mapping $f: \mathbf{N} \rightarrow \mathbf{N}$, satisfying
$$
f(f(n))=f(n)+n,
$$
$$
\begin{aligned}
f(1) & =2 \\
f(n+1) & >f(n) ?
\end{aligned}
$$
