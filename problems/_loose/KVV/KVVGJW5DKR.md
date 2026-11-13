---
tag: KVVGJW5DKR
kind: problem
type: answer
answer: "4"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=80892
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Study the sequence defined by $\mathfrak{u}_{0}=0$ and $\mathfrak{u}_{n+1}=\sqrt{12+\mathfrak{u}_{n}}$ for all $\mathfrak{n} \in \mathbb{N}$.

Regarding the second type of equations:

Definition 2.11. Let $\left(u_{n}\right)$ be a real sequence. We say it satisfies a recurrence equation of order $\mathbf{k}$ (linear) if there exists $k \in \mathbb{N}^{*}$ and real numbers $a_{0}, \cdots, a_{k-1}$ such that for all natural numbers $n$,

$$
u_{n+k}+a_{k-1} u_{n+k-1}+\cdots+a_{0} u_{n}=0
$$

Definition 2.12. The equation $X^{k}+a_{k-1} X^{k-1}+\cdots+a_{0}=0$ is called the characteristic equation.

Example 2.13. For an arithmetic sequence with common difference $a, u_{n+1}-u_{n}=u_{n+2}-u_{n+1}=a$, so $u_{n+2}-2 u_{n+1}+u_{n}=0$ is a recurrence equation satisfied by $u_{n}$.

For a geometric sequence with common ratio $a, u_{n+1}-a u_{n}=0$.

An arithmetico-geometric sequence satisfies a relation of the form: $\mathfrak{u}_{n+1}=a u_{n}+b$, and we obtain the recurrence equation $u_{n+2}-(a+1) u_{n+1}+a u_{n}=0$.

The general solution of such a recurrence equation (whose proof is unnecessary and tedious in our context) uses the concept of polynomials, discussed in the following section. Let's focus on orders 1 and 2 here.

Proposition 2.14. If for all $n \in \mathbb{N}, u_{n+1}-a u_{n}=0$, then $u_{n}=u_{0} a^{n}$.

Proposition 2.15. If for all $n \in \mathbb{N}, u_{n+2}+a_{1} u_{n+1}+a_{0} u_{n}=0$, we solve the quadratic characteristic equation $X^{2}+a_{1} X+a_{0}=0$.

- If it has two distinct solutions $r_{1}$ and $r_{2}$, then: $u_{n}=c_{1} r_{1}^{n}+c_{2} r_{2}^{n}$, where $c_{1}$ and $c_{2}$ are determined using, for example, the values of $\mathfrak{u}_{0}$ and $\mathfrak{u}_{1}$.
- If it has a double root $r$, then: $\mathfrak{u}_{n}=(a n+b) r^{n}$, and again $\mathfrak{u}_{0}$ and $\mathfrak{u}_{1}$ allow us to determine $a$ and $b$.

Would you be able to find in the previous property where the arithmetic, geometric, and arithmetico-geometric sequences are hidden?

Example 2.16. A geometric sequence corresponds to a recurrence equation of order 1. An arithmetic sequence corresponds to a recurrence equation of order 2 with 1 as a double root.

An arithmetico-geometric sequence with common ratio $a$ corresponds to a recurrence equation of order 2 whose solutions are 1 and $a$.

So much promising theory only calls out more strongly for exercises allowing us to apply these new knowledge victoriously.
