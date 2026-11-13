---
tag: YEPK92X8PH
kind: problem
type: answer
answer: f(n)=\alphav_{p}(n)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=129230
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a prime $p \geq 5$ and a positive integer $n$, find all functions $f: \mathbf{Z}_{+} \rightarrow \mathbf{N}$, such that:
(1) For all integer sequences satisfying $a_{i} \notin\{0,1\}(1 \leqslant i \leqslant p-2)$, and $p \nmid\left(a_{i}-1\right)$, we have
$$
\sum_{i=1}^{p-2} f\left(a_{i}\right)=f\left(\prod_{i=1}^{p-2} a_{i}\right) ;
$$
(2) For any coprime integers $a, b$, when $a \equiv b(\bmod p)$, $f(a)=f(b)$;
(3) For any positive integer $n$, there exists $l \in \mathbf{Z}_{+}$, such that $f(l)=n$.
