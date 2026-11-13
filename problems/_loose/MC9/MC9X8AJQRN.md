---
tag: MC9X8AJQRN
kind: problem
type: answer
answer: f(2n) = 2n + 2u \text{ and } f(2n + 1) = 2n + 2v \quad \forall n \in \mathbb{Z}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=253627
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all function $f:\mathbb{Z}\to\mathbb{Z}$ satisfying

$\text{(i)}$ $f(f(m)+n)+2m=f(n)+f(3m)$ for every $m,n\in\mathbb{Z}$,

$\text{(ii)}$ there exists a $d\in\mathbb{Z}$ such that $f(d)-f(0)=2$, and

$\text{(iii)}$ $f(1)-f(0)$ is even.
