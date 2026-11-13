---
tag: NF7MFZ76S0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268651
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two complex numbers $z_1$ and $z_2$ are chosen uniformly and at random from the disk $0\le |z| \le 1$. Suppose $z_1 = a + bi$ and $z_2 = c + di$, where $a, b, c, d$ are all real numbers. The probability that
$$\frac{a^2 + b^2} {2abcd + a^2c^2 + b^2d^2} \le \frac{a^2 + b^2}{ - 2abcd + a^2d^2 + b^2c^2} \le 4$$
can be written as $\frac{p+q\pi -r\sqrt{s}}{ i \pi}$ , where $p, q, r, s, t$ are positive integers, gcd $(p, q, r, t) =1$, and $s$ is not divisible by the square of any prime. Compute $pqrst$.
