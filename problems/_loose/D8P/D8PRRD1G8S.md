---
tag: D8PRRD1G8S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Brazil/train/0001.parquet#row=317
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: br-obm
    source: hf-mathnet
    label: Brazil XXXI Brazilian Math Olympiad
---
For each positive integer $n$ let $f(n)$ be the number of products of integers bigger than $1$ whose result is at most $n$, i.e. $f(n)$ is the number of $k$-uples $(a_1, a_2, \dots, a_k)$ where $k$ is a natural number, $a_i \ge 2$ is an integer for all $i$ and $a_1 \cdot a_2 \cdot \dots a_k \le n$ (include, by convention, the empty $0$-uple $(\cdot)$, whose product is $1$).

Thus, for example, $f(1) = 1$ because of the $0$-uple $(\cdot)$ and $f(6) = 9$, because of the $0$-uple $(\cdot)$, the $1$-uples $(2), (3), (4), (5)$ and $(6)$ and the $2$-uples $(2, 2), (2, 3)$ and $(3, 2)$.

Let $\alpha > 1$ such that $\sum_{m=1}^{\infty} \frac{1}{m^{\alpha}} = 2$.

a. Prove that there exists a constant $K > 0$ such that $f(n) \le K \cdot n^{\alpha}$ for all positive integers $n$.

b. Prove that there exists a constant $c > 0$ such that $f(n) \ge c \cdot n^{\alpha}$ for all positive integers $n$.
