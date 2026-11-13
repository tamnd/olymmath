---
tag: 4MQ8CZXG0B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=69620
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The value of the polynomial $P_{n}(x)=a_{n} x^{n}+a_{n-1} x^{n-1}+\ldots+a_{1} x+a_{0} \left(a_{n} \neq 0\right)$ at the point $x=c$ can be computed using exactly $n$ multiplications. For this, the polynomial $P_{n}(x)$ should be represented as $P_{n}(x)=\left(\ldots\left(a_{n} x+a_{n-1}\right) x+\ldots\right.$ $\left.+a_{1}\right) x+a_{0}$. Let $b_{n}, b_{n-1}, \ldots, b_{0}$ be the values of the expressions obtained during the computation of $P_{n}(c)$, that is, $b_{n}=a_{n}, b_{k}=c b_{k+1}+a_{k}(k=n-1, \ldots, 0)$. Prove that when the polynomial $P_{n}(x)$ is divided by $x-c$ with a remainder, the coefficients of the quotient polynomial will coincide with the numbers $b_{n-1}, \ldots, b_{1}$, and the remainder will be the number $b_{0}$. Thus, the following equality will hold:

$P_{n}(x)=(x-c)\left(b_{n} x^{n-1}+\ldots+b_{2} x+b_{1}\right)+b_{0}$.
