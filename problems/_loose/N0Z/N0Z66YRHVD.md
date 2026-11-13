---
tag: N0Z66YRHVD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269226
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A function $f:\mathbb R\to\mathbb R$ has the property that for every
$x,y\in\mathbb R$ there exists a real number $t$ (depending on $x$ and $y$) such
that $0<t<1$ and
$$f(tx+(1-t)y)=tf(x)+(1-t)f(y).$$
Does it imply that
$$f\left(\frac{x+y}2\right)=\frac{f(x)+f(y)}2$$
for every $x,y\in\mathbb R$?
