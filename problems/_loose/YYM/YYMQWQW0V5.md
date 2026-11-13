---
tag: YYMQWQW0V5
kind: problem
type: answer
answer: "431"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=180159
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n_{1}, n_{2} \in \mathbb{R}$ and $f\left(n_{1}\right)=f\left(n_{2}\right)$. Then

$6 n_{1}+5=(f \circ f)\left(n_{1}\right)=f\left(f\left(n_{1}\right)\right)=f\left(f\left(n_{2}\right)\right)=(f \circ f)\left(n_{2}\right)=6 n_{2}+5 \Rightarrow n_{1}=n_{2}$

In the given relation, we substitute $n$ with $f(n)$ and obtain

$(f \circ f)(f(n))=6 f(n)+5, f(6 n+5)=6 f(n)+5$

$n=15 \Rightarrow f(95)=11$

$n=95 \Rightarrow f(575)=71$

$n=575 \Rightarrow f(3455)=431$
