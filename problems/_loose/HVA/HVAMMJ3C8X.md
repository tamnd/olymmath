---
tag: HVAMMJ3C8X
kind: problem
type: answer
answer: =1,=1+\log_{3}\frac{16\5\sqrt{7}}{9},=0,=\log_{2}\frac{16\5\sqrt{7}}{9}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=5057
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Rewrite the equation as $\left(n^{2}-1\right)\left(3^{a-1}+3^{1-a}\right)=\frac{16 n}{3}$. The values $n= \pm 1$ and $n=0$ are not solutions. Since $3^{a-1}+3^{1-a} \geqslant 2$, it is necessary that $\frac{16 n}{3 n^{2}-3} \geqslant 2$ $\Leftrightarrow 3 n^{2}-8 n-3 \leqslant 0$ (considering that $|n|>1$). $n \in\left[-\frac{1}{3} ; 3\right]$. For $n=2$, we get $3^{a-1}+3^{1-a}=\frac{32}{9}$, from which $a=1+\log _{3} \frac{16 \pm 5 \sqrt{7}}{9}$. For $n=3$, we get $3^{a-1}+3^{1-a}=2$, from which $a=1$.
