---
tag: TZ84YT8DZ5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33467
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(Fibonacci numbers.) Let $n \geqslant 1$ and $F_{n}$ be the number of ways to represent the number $n$ as an ordered sum of ones and twos. Then it is clear that

$$
\begin{aligned}
& F_{1}=1 \\
& F_{2}=2 (\text { since } 2=1+1=2) \\
& F_{3}=3 (3=1+1+1=1+2=2+1) \\
& F_{4}=5 (4=1+1+1+1=2+1+1=1+2+1=1+1+2=2+2)
\end{aligned}
$$

(a) Show that for $n \geqslant 2$ the Fibonacci numbers $F_{n}$ satisfy the recurrence relations

$$
F_{n}=F_{n-1}+F_{n-2}
$$

(with $F_{0}=1, F_{1}=1$ ).

(b) Derive from the recurrence relations $(*)$ that

$$
F_{n}=\frac{1}{\sqrt{5}}\left[\left(\frac{1+\sqrt{5}}{2}\right)^{n+1}-\left(\frac{1-\sqrt{5}}{2}\right)^{n+1}\right]
$$

where $\frac{1+\sqrt{5}}{2}=1.6180 \ldots, \frac{1-\sqrt{5}}{2}=-0.6180 \ldots$

(c) Using the recurrence relations $(*)$, show that the generating function $F(x)=\sum_{n \geqslant 0} F_{n} x^{n}$ of the sequence $\left(F_{n}\right)_{n \geqslant 0}$ is given by the formula

$$
F(x)=\frac{1}{1-x-x^{2}}
$$

(d) The Fibonacci numbers (traditionally associated with the reproduction of rabbits, as indicated by Leonardo Fibonacci himself in the 13th century in his work "Liber Abaci") have many interesting properties, for example,

$$
\begin{array}{ll}
F_{0}+F_{1}+\ldots+F_{n-1}=F_{n+1}-1, & F_{n-1}^{2}+F_{n}^{2}=F_{2 n} \\
F_{n-1} F_{n}+F_{n} F_{n+1}=F_{2 n+1}, & F_{m} F_{n}+F_{m-1} F_{n-1}=F_{m+n}
\end{array}
$$

(with $m, n \geqslant 0$ and $F_{-1}=0$ ).

Verify the validity of these equalities.

(e) Prove that for the Fibonacci numbers the formula holds

$$
F_{n}=\sum_{k=0}^{[n / 2]} C_{n-k}^{k}
$$

(One can verify that $\left(F_{0}, F_{1}, \ldots, F_{17}\right)=(1,1,2,3,5,8,13,21,34,55$, $89,144,233,377,610,987,1597,2584)$.

(f) Show that for $n \leqslant 9$ the equality holds

$$
\frac{F_{n}}{\left[e^{(n-1) / 2}\right]}=1
$$

but for $n=10$ the inequality $F_{10} /\left[e^{9 / 2}\right]<1$ holds and

$$
\lim _{n \rightarrow \infty} \frac{F_{n}}{\left[e^{(n-1) / 2}\right]}=0
$$
