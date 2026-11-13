---
tag: D6B2VWWWF2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=128280
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a function $f(x)$ defined on $\mathbf{R}$ with the following properties:
(a) There exists a constant $T$ such that for any $x \in \mathbf{R}$, $f(x+2T)=f(x)$;
(b) When $\frac{T}{2} \leqslant x \leqslant T$, $f(x)=f(T-x)$;
(c) When $T \leqslant x \leqslant \frac{3}{2} T$, $f(x)=-f(x-T)$;
(d) When $\frac{3}{2} T \leqslant x \leqslant 2 T$, $f(x)=-f(2 T-x)$.

Prove: For any $x \in \mathbf{R}$, $f(x)=f(T-x)$.
