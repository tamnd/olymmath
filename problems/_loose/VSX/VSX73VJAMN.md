---
tag: VSX73VJAMN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=141341
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p>2$ be a natural number, and let $\theta=\frac{2 \pi}{p}$. If for each real number $x \in \mathbf{R}$, the function $f(x)$ satisfies the relation
$$
f(x+a)=\frac{(\cos \theta) f(x)-\sin \theta}{(\sin \theta) f(x)+\cos \theta},(a>0)
$$

then $f(x)$ is a periodic function, and $pa$ is one of its periods.
