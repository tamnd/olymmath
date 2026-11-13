---
tag: 39VPNXZXNN
kind: problem
type: answer
answer: Collatz
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154684
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Philippines/train/0001.parquet#row=241
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ph-pmo
    source: hf-mathnet
    label: Philippines 22nd Philippine Mathematical Olympiad
---
One of the biggest mathematical breakthroughs in 2019 was progress on an 82 -year old problem by the renowned mathematician and Fields medalist Terence Tao.
Consider the function
$$
f(n)=\left\{\begin{array}{cl}
\frac{n}{2} & \text { if } n \text { is even } \\
3 n+1 & \text { if } n \text { is odd }
\end{array}\right.
$$

Starting with any positive integer $n$, it was conjectured that recursive applications of the above function always lead to 1 .

While a general proof of this result still eludes the mathematical community, Tao was able to show that if there are counterexamples to this conjecture, their frequency approaches 0 as $n$ increases. What is the surname of the German mathematician who proposed this conjecture in $1937 ?$
