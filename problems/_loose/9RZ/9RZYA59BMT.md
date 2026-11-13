---
tag: 9RZYA59BMT
kind: problem
type: answer
answer: (,b)=(3,45)or(15,25)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=179183
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\mathrm{d}=(a, b)$ and $m=[a, b]$ then:

$a=d x, b=d y, (x, y)=1$ and $5 d x+3 d y=150$ and $m=15 d$.

But $d m=a b$, so $m=d x y$ and since $m=15 d$, it follows that $x y=15$.

We have $(x, y) \in\{(1,15) ;(15,1) ;(3,5) ;(5,3)\}$

For $(x, y) \in\{(15,1) ;(5,3)\} \Rightarrow d \notin \mathbb{N}$.

For $(x, y)=(1,15)$, it follows that $d=3, a=3, b=45$

For $(x, y)=(3,5)$, it follows that $d=5, a=15, b=25$
