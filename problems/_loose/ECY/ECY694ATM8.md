---
tag: ECY694ATM8
kind: problem
type: answer
answer: a = 2\sqrt{5}, b = -\sqrt{5}, c = 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206406
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a function $ f(x) = 6x(1 - x)$, suppose that positive constant $ c$ and a linear function $ g(x) = ax + b\ (a,\ b: \text{constants}\,\ a > 0)$ satisfy the following 3 conditions: $ c^2\int_0^1 f(x)\ dx = 1,\ \int_0^1 f(x)\{g(x)\}^2\ dx = 1,\ \int_0^1 f(x)g(x)\ dx = 0$. Answer the following questions.

(1) Find the constants $ a,\ b,\ c$.

(2) For natural number $ n$, let $ I_n = \int_0^1 x^ne^x\ dx$. Express $ I_{n + 1}$ in terms of $ I_n$. Then evaluate $ I_1,\ I_2,\ I_3$.

(3) Evaluate the definite integrals $ \int_0^1 e^xf(x)\ dx$ and $ \int_0^1 e^xf(x)g(x)\ dx$.

(4) For real numbers $ s,\ t$, define $ J = \int_0^1 \{e^x - cs - tg(x)\}^2\ dx$. Find the constants $ A,\ B,\ C,\ D,\ E$ by setting $ J = As^2 + Bst + Ct^2 + Ds+Et + F$.
(You don't need to find the constant $ F$).

(5) Find the values of $ s,\ t$ for which $ J$ is minimal.
