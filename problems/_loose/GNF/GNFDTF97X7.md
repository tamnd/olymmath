---
tag: GNFDTF97X7
kind: problem
type: answer
answer: f(x) = \frac{3\sqrt{3}}{3 + \sqrt{3}x}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248305
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all differentiable functions $f, g:[0,\infty) \to \mathbb{R}$ and the real constant $k\geq 0$ such that
\begin{align*} f(x) &=k+ \int_0^x \frac{g(t)}{f(t)}dt \\
g(x) &= -k-\int_0^x f(t)g(t) dt \end{align*}
and $f(0)=k, f'(0)=-k^2/3$ and also $f(x)\neq 0$ for all $x\geq 0$.\\ \\
* (Nora Gavrea)*
