---
tag: VR6N1Z3EMJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=45552
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The method of mathematical induction, which uses the transition "from $n$ to $n+1$", is not only used for proofs but also for defining (specifying) certain objects. For example, the sequence

$$
a, a+d, a+2 d, \ldots, a+(n-1) d, \ldots
$$

can be defined using the equations:

40

$$
\begin{gathered}
u_{1}=a \\
u_{n+1}=u_{n}+d
\end{gathered}
$$

The equation $u_{n+1}=u_{n}+d$ in conjunction with $u_{1}=a$ fully determines $u_{n}$ for any natural number $n$. Such definitions are called inductive (and also recursive or recurrent).

Define the sequences inductively:

$$
\begin{aligned}
& \text { 1) } a, a q, a q^{2}, \ldots, a q^{n-1}, \ldots \\
& \text { 2) } 1,2,6, \ldots, n!, \ldots .
\end{aligned}
$$
