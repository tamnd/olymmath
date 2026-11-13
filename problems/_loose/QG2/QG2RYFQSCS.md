---
tag: QG2RYFQSCS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=100797
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $0<\theta \leqslant 2 \pi$. If there exists a real number $\varphi$, such that for any positive integer $n$, we have
$$
\cos (n \theta+\varphi)<\frac{\sqrt{3}}{2} .
$$

Find the number of all such $\theta$.
The original college entrance examination fill-in-the-blank question was to find the minimum value of $\theta$, which can be easily solved by contradiction. Now it is changed to find all values of $\theta$, the difficulty lies in proving that $\theta_{1}$ is a rational number. The solution below will use Kronecker's theorem.
