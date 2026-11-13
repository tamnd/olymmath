---
tag: YMNC25BBVQ
kind: problem
type: answer
answer: 1(2)(4)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=106980
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a function $f(x)$ defined on $(0,+\infty)$ that satisfies: for any $x \in(0,+\infty)$, it always holds that
$$
f(2 x)=2 f(x) \text {; }
$$

when $x \in(1,2]$, $f(x)=2-x$.
The following conclusions are given:
(1) For any $m \in \mathbf{Z}$, $f\left(2^{m}\right)=0$;
(2) The range of the function $f(x)$ is $[0,+\infty)$;
(3) There exists $n \in \mathbf{Z}$ such that $f\left(2^{n}+1\right)=9$;
(4) The necessary and sufficient condition for "the function $f(x)$ is monotonically decreasing on the interval $(a, b)$" is "there exists $k \in \mathbf{Z}$ such that $(a, b) \subseteq\left(2^{k}, 2^{k+1}\right)$.
Among these, the sequence numbers of all correct conclusions are $ $
