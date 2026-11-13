---
tag: XTKA6VAFQ1
kind: problem
type: answer
answer: ^{2}+b^{2}\leqslant^{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=108278
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the domain of the function $y=f(x)$ be $\mathrm{R}$. When $x>0$, $f(x)>1$, and for any $x, y \in \mathrm{R}$, $f(x+y)=f(x) \cdot f(y)$. When $x \neq y$, $f(x) \neq f(y)$.
(1) Find $f(0)$;
(2) Prove that $f(x)$ is increasing on $\mathrm{R}$;
(3) Let $A=\left\{(x, y) \mid f\left(x^{2}\right) \cdot f\left(y^{2}\right)<f(1)\right\}$,
$B=\{(x, y) \mid f(a x+b y+c)=1, a, b, c \in \mathrm{R}$, and $a \neq 0\}$, and $A \cap B=\varnothing$, find the conditions that $a, b, c$ must satisfy.
