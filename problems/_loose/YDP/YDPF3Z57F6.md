---
tag: YDPF3Z57F6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=113547
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $k$ be a given positive integer, $r=k+\frac{1}{2}$.
$$
\begin{array}{l}
\text { Let } f^{(1)}(x)=f(x)=x\lceil x\rceil, \\
f^{(l)}(x)=f\left(f^{(l-1)}(x)\right), x \in \mathbf{R}_{+},
\end{array}
$$

where $\lceil x\rceil$ denotes the smallest integer not less than the real number $x$.
Prove: There exists a positive integer $m$, such that $f^{(m)}(r)$ is an integer. ${ }^{[1]}$
