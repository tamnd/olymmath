---
tag: PHM7X5XEFB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=120867
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(2008 Shanghai Jiao Tong University Winter Camp Test Question) Modern information is represented by binary characters, such as: $v=\left(a_{1}, a_{2}, \cdots, a_{n}\right), a_{i}=0$ or $1,\left(i \in[1, n]\right.$ and $\left.i \in \mathbf{N}^{+}\right)$ is called a byte of length $n$. Let $u=\left(a_{1}, a_{2}, \cdots, a_{n}\right), v=\left(b_{1}, b_{2}, \cdots, b_{n}\right)$, and use $d(u, v)$ to represent the number of positions where $a_{1} \neq b$, for example, $v=(0,0,0,1)$. $u=(1,0,0,1), w=(1,1,1,1)$, then $\dot{d}(u, v)=1, d(u, w)=2, d(v, w)=3$.
(1) If $u=(0,0,0,0,0)$, how many bytes $v$ of length 5 satisfy $d(u, v)=1$?
(2) If $u=(0,0,0,0,0)$, how many bytes $v$ of length 5 satisfy $d(u, v)=3$?
(3) If $w=(0,0,0, \cdots, 0)$ of length $n, u=\left(a_{1}, a_{2}, \cdots, a_{n}\right), v=\left(b_{1}, b_{2}, \cdots, b_{n}\right)$, prove that: $d(u, v) \leqslant d(u, w)+d(v, w)$.
