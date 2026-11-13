---
tag: ZPPVZNCSMN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=83667
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Show that there are infinitely many prime numbers of the form $4 \mathrm{k}-1$.

If the prime factorization of the integer $n \geqslant 1$ is $n=p_{1}^{\alpha_{1}} p_{2}^{\alpha_{2}} \ldots p_{k}^{\alpha_{k}}$, then the positive divisors of $n$ are the integers of the form $p_{1}^{\beta_{1}} p_{2}^{\beta_{2}} \ldots p_{k}^{\beta_{k}}$, with $0 \leqslant \beta_{i} \leqslant \alpha_{i}$ for all $1 \leqslant i \leqslant k$. As a consequence, we obtain an expression for the gcd and lcm of two integers when their prime factorizations are known. Precisely, if

$$
\begin{aligned}
& a=p_{1}^{\alpha_{1}} p_{2}^{\alpha_{2}} \ldots p_{k}^{\alpha_{k}} \\
& b=p_{1}^{\beta_{1}} p_{2}^{\beta_{2}} \ldots p_{k}^{\beta_{k}}
\end{aligned}
$$

where the $p_{i}$ are pairwise distinct, but the $\alpha_{i}$ and $\beta_{i}$ are possibly zero, we have:

$$
\begin{aligned}
\operatorname{gcd}(a, b) & =p_{1}^{\min \left(\alpha_{1}, \beta_{1}\right)} p_{2}^{\min \left(\alpha_{2}, \beta_{2}\right)} \ldots p_{k}^{\min \left(\alpha_{k}, \beta_{k}\right)} \\
\operatorname{lcm}(a, b) & =p_{1}^{\max \left(\alpha_{1}, \beta_{1}\right)} p_{2}^{\max \left(\alpha_{2}, \beta_{2}\right)} \ldots p_{k}^{\max \left(\alpha_{k}, \beta_{k}\right)}
\end{aligned}
$$

If we note that for $\alpha$ and $\beta$ integers (or real numbers), we always have $\min (\alpha, \beta)+\max (\alpha, \beta)=$ $\alpha+\beta$, we directly deduce from the two previous expressions the following relation:

$$
\operatorname{gcd}(a, b) \cdot \operatorname{lcm}(a, b)=a b
$$

Definition 48 (p-adic valuation). If $p$ is a prime number, and $n$ is a non-zero integer, the p-adic valuation of $n$ is the greatest integer $k$ such that $p^{k}$ divides $n$. It is denoted by $v_{p}(n)$. If $n=0$, we agree that $v_{p}(0)=+\infty$ for any prime number $p$.

If $n$ is non-zero and decomposes as $n=p_{1}^{\alpha_{1}} p_{2}^{\alpha_{2}} \ldots p_{k}^{\alpha_{k}}$, then $v_{p_{i}}(n)=\alpha_{i}$ for all $1 \leqslant i \leqslant k$, and $v_{p}(\mathfrak{n})=0$ if $p$ is different from the $p_{i}$. Thus, $v_{p}(\mathfrak{n})=0$ except for a finite number of prime $p$. If $a$ and $b$ are two integers, we have, for any prime number $p$:

$$
\begin{gathered}
v_{p}(a b)=v_{p}(a)+v_{p}(b) \\
v_{p}(a+b) \geqslant \min \left(v_{p}(a), v_{p}(b)\right)
\end{gathered}
$$

and the last inequality is an equality whenever $v_{p}(a) \neq v_{p}(b)$.
