---
tag: HEXZRVPGK5
kind: problem
type: answer
answer: "16"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154584
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Philippines/train/0001.parquet#row=333
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ph-pmo
    source: hf-mathnet
    label: Philippines 25th Philippine Mathematical Olympiad Area Stage
---
Let $a, b, c$ be real numbers with $1<a<b<c$ that satisfy the equations
$$
\begin{array}{c}
\log _{a} b+\log _{b} c+\log _{c} a=6.5 \\
\log _{b} a+\log _{c} b+\log _{a} c=5 .
\end{array}
$$

Then $\max \left\{\log _{a} b, \log _{b} c, \log _{c} a\right\}$ can be written in the form $\sqrt{x}+\sqrt{y}$, where $x$ and $y$ are positive integers. What is $x+y$ ?
