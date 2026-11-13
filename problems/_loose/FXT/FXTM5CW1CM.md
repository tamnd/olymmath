---
tag: FXTM5CW1CM
kind: problem
type: answer
answer: \equiv2\pmod{3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=176906
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the polynomial

$$
P_{n}(x)=\binom{n}{2}+\binom{n}{5} x+\binom{n}{8} x^{2}+\cdots+\binom{n}{3 k+2} x^{k}
$$

where $n \geq 2$ is a natural number and $k=\left[\frac{n-2}{3}\right]$.

(a) Prove that $P_{n+3}(x)=3 P_{n+2}(x)-3 P_{n+1}(x)+(x+1) P_{n}(x)$;

(b) Find all integer numbers $a$ such that $P_{n}\left(a^{3}\right)$ is divisible by $3^{\left[\frac{n-1}{2}\right]}$ for all $n \geq 2$.
