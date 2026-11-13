---
tag: 2F8VVG5S5E
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221722
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For function $f:\mathbb Z^+ \to \mathbb R$ and coprime positive integers $p,q$ ; define $f_p,f_q$ as
$$f_p(x)=f(px)-f(x), f_q(x)=f(qx)-f(x) \space \space (x\in\mathbb Z^+)$$
$f$ satisfies following conditions.

$ $ $ $ $(i)$ $ $ for all $r$ that isn't multiple of $pq$, $f(r)=0$

$ $ $ $ $(ii)$ $ $ $\exists m\in \mathbb Z^+$ $ $ $s.t.$ $ $ $\forall x\in \mathbb Z^+, f_p(x+m)=f_p(x)$ and $f_q(x+m)=f_q(x)$

Prove that if $x\equiv y$ $ $ $(mod m)$, then $f(x)=f(y)$ $ $ ($x, y\in \mathbb Z^+$).
