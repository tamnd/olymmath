---
tag: P8AG2N1T3C
kind: problem
type: answer
answer: \frac{\pi}{4}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210942
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider a right-angled triangle with $AB=1,\ AC=\sqrt{3},\ \angle{BAC}=\frac{\pi}{2}.$ Let $P_1,\ P_2,\ \cdots\cdots,\ P_{n-1}\ (n\geq 2)$ be the points which are closest from $A$, in this order and obtained by dividing $n$ equally parts of the line segment $AB$. Denote by $A=P_0,\ B=P_n$, answer the questions as below.

(1) Find the inradius of $\triangle{P_kCP_{k+1}}\ (0\leq k\leq n-1)$.

(2) Denote by $S_n$ the total sum of the area of the incircle for $\triangle{P_kCP_{k+1}}\ (0\leq k\leq n-1)$.

Let $I_n=\frac{1}{n}\sum_{k=0}^{n-1} \frac{1}{3+\left(\frac{k}{n}\right)^2}$, show that $nS_n\leq \frac {3\pi}4I_n$, then find the limit $\lim_{n\to\infty} I_n$.

(3) Find the limit $\lim_{n\to\infty} nS_n$.
