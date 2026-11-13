---
tag: PEJNQX8K0W
kind: problem
type: answer
answer: -3\leqslant\leqslant3
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=93288
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A function $f(x)$ defined on $\mathbf{R}$ satisfies: for any real numbers $m, n$, it always holds that $f(m+n)=f(m) \cdot f(n)$, and when $x>0$, $0 < f(x) < 1$. Let $A=\{(x, y) ; y > \log_{f(1)} x\} \cdot B=\{(x, y) ; f(a x-y+\sqrt{2})=1, a \in \mathbf{R}\}$, if $A \cap B=\varnothing$, try to determine the range of values for $a$.
