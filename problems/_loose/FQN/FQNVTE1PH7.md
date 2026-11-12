---
tag: FQNVTE1PH7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=40044
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $P_{n}(x)$ be a rational function of degree $n$ with respect to $x$:

$$
P_{n}(x)=a_{0} x^{n}+a_{1} x^{n-1}+\ldots+a_{n-1} x+a_{n}\left(a_{0} \neq 0\right)
$$

When dividing $\boldsymbol{P}_{n}(x)$ by the binomial $x-\alpha$, the quotient is $Q_{n-1}(x)$, which is an entire function of degree $n-1$ (why?) and, generally, the remainder $\boldsymbol{R}$, independent of $x$ (why?). In other words,

$$
P_{n}(x)=(x-\alpha) Q_{n-1}(x)+R \ldots \ldots . . . .(1)
$$

Show that the necessary and sufficient condition for the polynomial $P_{n}(x)$ to be divisible without remainder by $x - \alpha$ is the identity $P_{n}(\alpha)=0$. In other words: if substituting the value $\alpha$ for $x$ in the polynomial $\boldsymbol{P}_{n}(x)$ identically turns it into 0, then $\boldsymbol{P}_{n}(x)$ is divisible without remainder by $x - \alpha$.
