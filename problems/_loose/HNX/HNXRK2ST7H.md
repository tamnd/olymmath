---
tag: HNXRK2ST7H
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=104502
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $r$ positive real numbers $p_{1}, p_{2}$, $\cdots, p_{r}$ that sum to 1, and a positive integer $n$, let
$$
M=\left\{\left.\frac{n!}{k_{1}!\cdot k_{2}!\cdots \cdot k_{r}!} p_{1}^{k_{1}} p_{2}^{k_{2}} \cdots p_{r}^{k_{r}} \right\rvert k_{1}, k_{2},\right.
$$
$\cdots, k_{r}$ are non-negative integers that sum to $\left.n\right\}$.
Suppose $\frac{n!}{m_{1}!\cdot m_{2}!\cdots \cdots m_{r}!} p_{1}^{m_{1}} p_{2}^{m_{2}} \cdots p_{r}^{m_{r}}$ is the largest element in the set $M$. Prove: for $i=1,2, \cdots, r$, we have
$$
n p_{i}-1 \leqslant m_{i} \leqslant(n+r-1) p_{i} .
$$
