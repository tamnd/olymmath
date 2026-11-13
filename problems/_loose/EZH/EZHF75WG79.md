---
tag: EZHF75WG79
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=193921
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(a) First, determine two positive integers $x$ and $y$ with $\frac{2 x+11 y}{3 x+4 y}=1$.

Now, let $u$ and $v$ be two positive rational numbers with $u<v$.

If we write $u$ and $v$ as fractions $u=\frac{a}{b}$ and $v=\frac{c}{d}$, not necessarily in lowest terms and with $a, b, c, d$ positive integers, then the fraction $\frac{a+c}{b+d}$ is called a mediant of $u$ and $v$. Since $u$ and $v$ can be written in many different forms, there are many different mediants of $u$ and $v$.

In (a), you showed that 1 is a mediant of $\frac{2}{3}$ and $\frac{11}{4}$.

Also, 2 is a mediant of $\frac{2}{3}$ and $\frac{11}{4}$ because $\frac{2}{3}=\frac{6}{9}$ and $\frac{11}{4}=\frac{44}{16}$ and $\frac{6+44}{9+16}=2$.

(b) Prove that the average of $u$ and $v$, namely $\frac{1}{2}(u+v)$, is a mediant of $u$ and $v$.

(c) Prove that every mediant, $m$, of $u$ and $v$ satisfies $u<m<v$.
