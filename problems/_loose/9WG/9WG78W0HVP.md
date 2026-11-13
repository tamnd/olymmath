---
tag: 9WG78W0HVP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=244384
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$n$ is a positive integer, $K$ the set of polynoms of real variables $x_1,x_2,...,x_{n+1}$ and $y_1,y_2,...,y_{n+1}$, function $f:K\rightarrow K$ satisfies
$$f(p+q)=f(p)+f(q), f(pq)=f(p)q+pf(q), (\forall)p,q\in K.$$
If $f(x_i)=(n-1)x_i+y_i, f(y_i)=2ny_i$ for all $i=1,2,...,n+1$ and
$$\prod_{i=1}^{n+1}(tx_i+y_i)=\sum_{i=0}^{n+1}p_it^{n+1-i}$$
for any real $t$, prove, that for all $k=1,...,n+1$
$$f(p_{k-1})=kp_k+(n+1)(n+k-2)p_{k-1}$$
