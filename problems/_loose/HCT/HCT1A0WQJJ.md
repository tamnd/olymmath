---
tag: HCT1A0WQJJ
kind: problem
type: answer
answer: f(x)={\begin{pmatrix}\frac{2}{2-x},&0\leqslantx<2\\0,&x\geqslant2\end{pmatrix}.}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=119617
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f$ be a function defined on the set of non-negative real numbers and taking values in the same set. Find all functions $f$ that satisfy the following conditions:
(i) $f[x \cdot f(y)] \cdot f(y)=f(x+y)$;(ii) $f(2)=0$; (iii) $f(x) \neq 0$, when $0 \leqslant x<2$.
(IMO - 27 Problem)
