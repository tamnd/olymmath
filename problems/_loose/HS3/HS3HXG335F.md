---
tag: HS3HXG335F
kind: problem
type: answer
answer: "1008"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=131499
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A=\{0,1, \cdots, 2016\}$. If a surjective function $f: \mathbf{N} \rightarrow A$ satisfies: for any $i \in \mathbf{N}$,
$$
f(i+2017)=f(i),
$$

then $f$ is called a "harmonious function".
$$
\begin{array}{l}
\text { Let } f^{(1)}(x)=f(x), \\
f^{(k+1)}(x)=f\left(f^{(k)}(x)\right)\left(k \in \mathbf{N}_{+}\right) .
\end{array}
$$

Suppose the "harmonious function" $f$ satisfies the condition: there exists a positive integer $M$, such that
(1) When $m<M$, if $i, j \in \mathbf{N}$, $i \equiv j+1(\bmod 2017)$, then $f^{(m)}(i)-f^{(m)}(j) \not \equiv \pm 1(\bmod 2017)$; (2) If $i, j \in \mathbf{N}, i \equiv j+1(\bmod 2017)$, then $f^{(M)}(i)-f^{(M)}(j) \equiv \pm 1(\bmod 2017)$. Find the maximum possible value of $M$.
