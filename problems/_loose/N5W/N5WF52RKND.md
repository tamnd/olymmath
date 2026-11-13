---
tag: N5WF52RKND
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=71584
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Nim-sum. We will say that a number $n$ is the nim-sum of numbers $m$ and $k$ ($m \oplus k=n$), if it is obtained from the numbers $m$ and $k$ after the following transformations.

1) $m$ and $k$ are written in binary notation

$$
m=\left(m_{s} \ldots m_{1} m_{0}\right)_{2}, k=\left(k_{s} \cdots k_{1} k_{0}\right)_{2}
$$

(the smaller number is padded with zeros at the front).

2) The resulting sets of digits are added component-wise modulo 2:

$$
\left(m_{\mathrm{s}}, \ldots, m_{1}, m_{0}\right)+\left(k_{\mathrm{s}}, \ldots, k_{1}, k_{0}\right) \equiv\left(n_{\mathrm{s}}, \ldots, n_{1}, n_{0}\right)(\bmod 2)
$$

3) The set of digits $\left(n_{s}, \ldots, n_{1}, n_{0}\right)$ is converted to the number $n$:

$$
\left(n_{\mathrm{s}} \ldots n_{1} n_{0}\right)_{2}=n
$$

For example, $4 \oplus 7=3$, because

$$
4=(100)_{2}, 7=(111)_{2}, (1,0,0)+(1,1,1) \equiv(0,1,1)(\bmod 2), (011)_{2}=3
$$

Prove that the nim-sum satisfies the following properties:

a) $m \oplus m=0$; b) $m \oplus k=k \oplus m$; c) $(m \oplus t) \oplus k=m \oplus(t \oplus k)$;
d) if $n \neq 0$ and

$$
m_{1} \oplus m_{2} \oplus \ldots \oplus m_{l}=n
$$

then there exists a number $j(1 \leqslant j \leqslant l)$, for which $m_{\mathrm{j}} \oplus n < m_{\mathrm{j}}$.
