---
tag: 82MB8PZYME
kind: problem
type: answer
answer: "n"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Bulgaria/train/0001.parquet#row=202
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A set of points in the plane is called good if the distance between any two points in it is at most $1$. Let $f(n, d)$ be the largest positive integer such that in any good set of $3n$ points, there is a circle of diameter $d$, which contains at least $f(n, d)$ points. Prove that there exists a positive real $\epsilon$, such that for all $d \in (1 - \epsilon, 1)$, the value of $f(n, d)$ does not depend on $d$ and find that value as a function of $n$.
(Kristiyan Vasilev, Konstantin Garov)
