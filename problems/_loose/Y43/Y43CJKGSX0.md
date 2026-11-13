---
tag: Y43CJKGSX0
kind: problem
type: answer
answer: "1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=177786
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$$
\text { a. } \begin{aligned}
\mathrm{a} & =2^{2 n+2} \cdot 7^{n+3}+11 \cdot 2^{2 n+5} \cdot 7^{n}+2^{2 n} \cdot 7^{n+3}-27 \cdot 2^{2 n+1} \cdot 7^{n} \\
& =2^{2 n} \cdot 2^{2} \cdot 7^{n} \cdot 7^{3}+11 \cdot 2^{2 n} \cdot 2^{5} \cdot 7^{n}+2^{2 n} \cdot 7^{n} \cdot 7^{3}-27 \cdot 2^{2 n} \cdot 2^{1} \cdot 7^{n} \\
& =2^{2 n} \cdot 7^{n} \cdot\left(2^{3} \cdot 7^{3}+11 \cdot 2^{5}+7^{3}-27 \cdot 2^{1}\right) \\
& =2^{2 n} \cdot 7^{n} \cdot(4 \cdot 343+11 \cdot 32+343-54) \\
& =2^{2 n} \cdot 7^{n} \cdot 2013
\end{aligned}
$$

Therefore, a is divisible by 2013

$3 \text{ points}$.
b.

Let d be a common divisor of the numbers a and b

$\mathrm{d} / 21^{\mathrm{n}} \cdot 3+4 \Rightarrow \mathrm{d} / 21^{\mathrm{n}+1}+28$

$\mathrm{d} / 21^{\mathrm{n}} \cdot 7+6 \Rightarrow \mathrm{d} / 21^{\mathrm{n}+1}+18 \Rightarrow \mathrm{d} / 10 \Rightarrow \mathrm{d} \in\{1,2,5,10\}$ $2 \text{ points}$

$u(a)=7, u(b)=3 \Rightarrow d=1$ $2 \text{ points}$
